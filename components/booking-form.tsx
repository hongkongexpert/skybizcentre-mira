"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, Users } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface BookingFormProps {
  trigger: React.ReactNode
}

export function BookingForm({ trigger }: BookingFormProps) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    serviceType: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    requirements: "",
  })

  const isWeekday = (dateString: string) => {
    const date = new Date(dateString + "T00:00:00")
    const day = date.getDay()
    return day >= 1 && day <= 5 // Monday (1) to Friday (5)
  }

  const getMinDate = () => {
    const today = new Date()
    const day = today.getDay()

    // If today is Saturday (6) or Sunday (0), set min date to next Monday
    if (day === 0 || day === 6) {
      const daysUntilMonday = day === 0 ? 1 : 2
      const nextMonday = new Date(today)
      nextMonday.setDate(today.getDate() + daysUntilMonday)
      return nextMonday.toISOString().split("T")[0]
    }

    return today.toISOString().split("T")[0]
  }

  const getMaxDate = () => {
    const today = new Date()
    const maxDate = new Date()
    maxDate.setMonth(today.getMonth() + 3)
    return maxDate.toISOString().split("T")[0]
  }

  const getValidDates = () => {
    const dates = []
    const today = new Date()
    const endDate = new Date()
    endDate.setMonth(today.getMonth() + 3) // 3 months ahead

    for (let d = new Date(today); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dayOfWeek = d.getDay()
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        // Monday to Friday only
        dates.push(d.toISOString().split("T")[0])
      }
    }
    return dates
  }

  const getBusinessHours = () => {
    const times = []
    for (let hour = 9; hour <= 18; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 18 && minute > 0) break // Stop at 6:00 PM
        const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
        const displayTime = new Date(`2000-01-01T${timeString}`).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        times.push({ value: timeString, label: displayTime })
      }
    }
    return times
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value
    console.log("[v0] Date selected:", selectedDate)

    if (selectedDate) {
      const date = new Date(selectedDate + "T00:00:00")
      const dayOfWeek = date.getDay()

      // Immediately prevent weekend selection
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        console.log("[v0] Weekend date blocked:", selectedDate, "Day:", dayOfWeek)
        e.target.value = ""
        toast({
          title: "Weekends Not Available",
          description: "Please select Monday through Friday only. We're closed on weekends.",
          variant: "destructive",
        })
        return
      }
    }

    setFormData({ ...formData, date: selectedDate })
  }

  const validateStep1 = () => {
    if (!formData.serviceType || !formData.date || !formData.time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields before proceeding.",
        variant: "destructive",
      })
      return false
    }

    if (!isWeekday(formData.date)) {
      toast({
        title: "Invalid Date",
        description: "Please select a weekday (Monday to Friday). We're closed on weekends.",
        variant: "destructive",
      })
      return false
    }

    return true
  }

  const handleNext = () => {
    if (validateStep1()) {
      setStep(step + 1)
    }
  }

  const handlePrev = () => setStep(step - 1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted with data:", formData)

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required contact information.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      console.log("[v0] Sending request to /api/booking")
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service: formData.serviceType,
          date: formData.date,
          time: formData.time,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          requirements: formData.requirements,
        }),
      })

      console.log("[v0] Response status:", response.status)

      let responseData
      try {
        responseData = await response.json()
        console.log("[v0] Response data:", responseData)
      } catch (jsonError) {
        console.error("[v0] Failed to parse JSON response:", jsonError)
        throw new Error("Server returned invalid response")
      }

      if (response.ok) {
        console.log("[v0] Booking successful")
        toast({
          title: "Booking Request Sent!",
          description: "We'll contact you within 24 hours to confirm your booking.",
        })
        setFormData({
          serviceType: "",
          date: "",
          time: "",
          name: "",
          email: "",
          phone: "",
          company: "",
          requirements: "",
        })
        setStep(1)
        setIsOpen(false)
      } else {
        console.log("[v0] Booking failed:", responseData)
        throw new Error(responseData.error || "Failed to send booking request")
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to send booking request. Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (!isOpen) return

    const timer = setTimeout(() => {
      const dateInput = document.querySelector('input[type="date"]') as HTMLInputElement
      if (dateInput) {
        console.log("[v0] Setting up weekend blocking for date input")

        // Add comprehensive event listeners
        const blockWeekends = (e: Event) => {
          const target = e.target as HTMLInputElement
          const selectedDate = target.value

          if (selectedDate) {
            const date = new Date(selectedDate + "T00:00:00")
            const dayOfWeek = date.getDay()

            if (dayOfWeek === 0 || dayOfWeek === 6) {
              console.log("[v0] Blocking weekend selection:", selectedDate)
              target.value = ""
              setFormData((prev) => ({ ...prev, date: "" }))
              toast({
                title: "Weekends Not Available",
                description: "Please select Monday through Friday only.",
                variant: "destructive",
              })
            }
          }
        }

        // Remove existing listeners to prevent duplicates
        dateInput.removeEventListener("change", blockWeekends)
        dateInput.removeEventListener("input", blockWeekends)

        // Add fresh listeners
        dateInput.addEventListener("change", blockWeekends)
        dateInput.addEventListener("input", blockWeekends)

        // Add CSS to visually disable weekends
        const styleId = "weekend-disable-styles"
        if (!document.getElementById(styleId)) {
          const style = document.createElement("style")
          style.id = styleId
          style.textContent = `
            /* Enhanced weekend blocking styles */
            input[type="date"]::-webkit-calendar-picker-indicator {
              cursor: pointer;
            }
            
            /* Prevent interaction with weekend days */
            input[type="date"] {
              position: relative;
            }
            
            /* Custom validation styling */
            input[type="date"]:invalid {
              border-color: #ef4444 !important;
              box-shadow: 0 0 0 1px #ef4444;
            }
            
            /* Additional browser-specific weekend blocking */
            input[type="date"]::-webkit-datetime-edit-day-field[aria-disabled="true"],
            input[type="date"]::-webkit-datetime-edit-month-field[aria-disabled="true"],
            input[type="date"]::-webkit-datetime-edit-year-field[aria-disabled="true"] {
              color: #9ca3af !important;
              pointer-events: none !important;
            }
          `
          document.head.appendChild(style)
        }
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      // Cleanup listeners when component unmounts
      const dateInput = document.querySelector('input[type="date"]') as HTMLInputElement
      if (dateInput) {
        dateInput.removeEventListener("change", handleDateChange)
        dateInput.removeEventListener("input", handleDateChange)
      }
    }
  }, [isOpen, toast])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-playfair text-xl">Book Your Space</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                Step 1 of 2: Service & Schedule
              </div>

              <div>
                <Label htmlFor="serviceType">Service Type *</Label>
                <Select
                  value={formData.serviceType}
                  onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="meeting-room">Meeting Room</SelectItem>
                    <SelectItem value="private-office">Private Office</SelectItem>
                    <SelectItem value="virtual-office">Virtual Office</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Date *</Label>
                  <Input
                    type="date"
                    value={formData.date}
                    min={getMinDate()}
                    max={getMaxDate()}
                    onChange={handleDateChange}
                    className="[&::-webkit-calendar-picker-indicator]:cursor-pointer"
                    style={{
                      colorScheme: "light",
                    }}
                    onKeyDown={(e) => {
                      // Prevent manual typing to force calendar usage
                      if (e.key !== "Tab" && e.key !== "Shift" && e.key !== "Enter") {
                        e.preventDefault()
                      }
                    }}
                  />
                  <p className="text-xs text-muted-foreground mt-1">Monday - Friday only</p>
                </div>
                <div>
                  <Label htmlFor="time">Time *</Label>
                  <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      {getBusinessHours().map((time) => (
                        <SelectItem key={time.value} value={time.value}>
                          {time.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground mt-1">9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <Button type="button" onClick={handleNext} className="w-full">
                Next Step
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                Step 2 of 2: Contact Information
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="requirements">Special Requirements</Label>
                <Textarea
                  placeholder="Any special requirements or equipment needed?"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                />
              </div>

              <div className="flex gap-2">
                <Button type="button" variant="outline" onClick={handlePrev} className="flex-1 bg-transparent">
                  Previous
                </Button>
                <Button type="submit" className="flex-1" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Book Now"}
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
