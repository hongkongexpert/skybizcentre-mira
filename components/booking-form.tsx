"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  CalendarIcon,
  Users,
  ArrowRight,
  ArrowLeft,
  Building2,
  Globe,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface BookingFormProps {
  trigger: React.ReactNode
}

export function BookingForm({ trigger }: BookingFormProps) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    serviceType: "",
    groupSize: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    requirements: "",
  })

  const serviceOptions = [
    {
      id: "private-office",
      title: "Private Office",
      icon: Building2,
    },
    {
      id: "meeting-room",
      title: "Meeting Room",
      icon: Users,
    },
    {
      id: "virtual-office",
      title: "Virtual Office",
      icon: Globe, // Changed from Mail to Globe icon for virtual office
    },
  ]

  const groupSizeOptions = [
    { id: "1-2", label: "1-2 people" },
    { id: "3-5", label: "3-5 people" },
    { id: "6-10", label: "6-10 people" },
    { id: "10+", label: "10+ people" },
  ]

  const timeSlots = [
    { id: "09:00", label: "9:00 AM" },
    { id: "10:00", label: "10:00 AM" },
    { id: "11:00", label: "11:00 AM" },
    { id: "12:00", label: "12:00 PM" },
    { id: "13:00", label: "1:00 PM" },
    { id: "14:00", label: "2:00 PM" },
    { id: "15:00", label: "3:00 PM" },
    { id: "16:00", label: "4:00 PM" },
    { id: "17:00", label: "5:00 PM" },
    { id: "18:00", label: "6:00 PM" },
  ]

  const isWeekday = (dateString: string) => {
    const date = new Date(dateString + "T00:00:00")
    const day = date.getDay()
    return day >= 1 && day <= 5
  }

  const getMinDate = () => {
    const today = new Date()
    const day = today.getDay()
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

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value
    if (selectedDate) {
      const date = new Date(selectedDate + "T00:00:00")
      const dayOfWeek = date.getDay()

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        e.target.value = ""
        toast({
          title: "Weekends Not Available",
          variant: "destructive",
        })
        return
      }
    }
    setFormData({ ...formData, date: selectedDate })
  }

  const validateStep1 = () => {
    if (!formData.serviceType || !formData.groupSize) {
      toast({
        title: "Please make your selections",
        variant: "destructive",
      })
      return false
    }
    return true
  }

  const validateStep2 = () => {
    if (!formData.date || !formData.time) {
      toast({
        title: "Please select date and time",
        variant: "destructive",
      })
      return false
    }

    if (!isWeekday(formData.date)) {
      toast({
        title: "Invalid Date",
        variant: "destructive",
      })
      return false
    }
    return true
  }

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      setStep(3)
    }
  }

  const handlePrev = () => setStep(step - 1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service: formData.serviceType,
          groupSize: formData.groupSize,
          date: formData.date,
          time: formData.time,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          requirements: formData.requirements,
        }),
      })

      const responseData = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setStep(4)
      } else {
        throw new Error(responseData.error || "Failed to send booking request")
      }
    } catch (error) {
      toast({
        title: "Error",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNewBooking = () => {
    setFormData({
      serviceType: "",
      groupSize: "",
      date: "",
      time: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      requirements: "",
    })
    setStep(1)
    setIsSuccess(false)
  }

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    const dayOfWeek = date.getDay()
    const today = new Date()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
    const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
    const isTooFar = date > new Date(today.getFullYear(), today.getMonth() + 3, today.getDate())

    return isWeekend || isPast || isTooFar
  }

  const formatDateForInput = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    return date.toISOString().split("T")[0]
  }

  const handleDateSelect = (day: number) => {
    if (isDateDisabled(day)) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      const dayOfWeek = date.getDay()

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        toast({
          title: "Weekends Not Available",
          variant: "destructive",
        })
      }
      return
    }

    const year = currentMonth.getFullYear()
    const month = String(currentMonth.getMonth() + 1).padStart(2, "0")
    const dayStr = String(day).padStart(2, "0")
    const formattedDate = `${year}-${month}-${dayStr}`

    setFormData({ ...formData, date: formattedDate })
  }

  const navigateMonth = (direction: "prev" | "next") => {
    const newMonth = new Date(currentMonth)
    if (direction === "prev") {
      newMonth.setMonth(currentMonth.getMonth() - 1)
    } else {
      newMonth.setMonth(currentMonth.getMonth() + 1)
    }
    setCurrentMonth(newMonth)
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    const dayNames = ["S", "M", "T", "W", "T", "F", "S"]

    const days = []
    const selectedDate = formData.date ? new Date(formData.date + "T00:00:00") : null

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8" />)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isDisabled = isDateDisabled(day)
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === currentMonth.getMonth() &&
        selectedDate.getFullYear() === currentMonth.getFullYear()

      days.push(
        <button
          key={day}
          type="button"
          onClick={() => handleDateSelect(day)}
          disabled={isDisabled}
          className={`h-8 w-8 rounded-lg text-sm font-medium transition-all ${
            isSelected
              ? "bg-primary text-primary-foreground shadow-md scale-105"
              : isDisabled
                ? "text-muted-foreground/30 cursor-not-allowed bg-muted/20"
                : "hover:bg-primary/10 hover:text-primary hover:scale-105"
          }`}
        >
          {day}
        </button>,
      )
    }

    return (
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={() => navigateMonth("prev")}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <h3 className="font-semibold text-base">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <button
            type="button"
            onClick={() => navigateMonth("next")}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-3">
          {dayNames.map((day, index) => (
            <div
              key={day + index}
              className="h-8 flex items-center justify-center text-sm font-semibold text-muted-foreground"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">{days}</div>
      </div>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md max-w-[95vw] max-h-[85vh] overflow-y-auto p-4">
        <DialogHeader className="space-y-2 pb-3 border-b border-border/20">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
              {isSuccess ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <CalendarIcon className="h-4 w-4 text-primary" />
              )}
            </div>
            <DialogTitle className="font-playfair text-lg text-foreground">
              {isSuccess ? "Booking Confirmed!" : "Book Tour"}
            </DialogTitle>
          </div>

          {!isSuccess && (
            <div className="flex items-center gap-2">
              <div className={`h-1 flex-1 rounded-full ${step >= 1 ? "bg-primary" : "bg-muted"} transition-colors`} />
              <div className={`h-1 flex-1 rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"} transition-colors`} />
              <div className={`h-1 flex-1 rounded-full ${step >= 3 ? "bg-primary" : "bg-muted"} transition-colors`} />
            </div>
          )}
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {step === 4 && isSuccess && (
            <div className="text-center space-y-4 py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
                <p className="text-muted-foreground">Your booking request has been submitted successfully.</p>
                <p className="text-sm text-muted-foreground">
                  A confirmation email has been sent to <strong>{formData.email}</strong>
                </p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-left space-y-1">
                <p className="text-sm">
                  <strong>Service:</strong> {serviceOptions.find((s) => s.id === formData.serviceType)?.title}
                </p>
                <p className="text-sm">
                  <strong>Date:</strong>{" "}
                  {new Date(formData.date + "T00:00:00").toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-sm">
                  <strong>Time:</strong> {timeSlots.find((t) => t.id === formData.time)?.label}
                </p>
                <p className="text-sm">
                  <strong>Group Size:</strong> {groupSizeOptions.find((g) => g.id === formData.groupSize)?.label}
                </p>
              </div>
              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="flex-1 h-10">
                  Close
                </Button>
                <Button type="button" onClick={handleNewBooking} className="flex-1 h-10">
                  Book Another
                </Button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label className="text-base font-semibold mb-3 block">Service Type</Label>
                <div className="grid gap-3">
                  {serviceOptions.map((option) => {
                    const Icon = option.icon
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: option.id })}
                        className={`relative p-4 rounded-lg border-2 text-left transition-all hover:shadow-md ${
                          formData.serviceType === option.id
                            ? "border-primary bg-primary/5 shadow-sm"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`p-2 rounded-md ${
                              formData.serviceType === option.id ? "bg-primary text-primary-foreground" : "bg-muted"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-sm">{option.title}</h3>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              formData.serviceType === option.id
                                ? "border-primary bg-primary"
                                : "border-muted-foreground/30"
                            }`}
                          >
                            {formData.serviceType === option.id && (
                              <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                            )}
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold mb-4 block">How many people?</Label>
                <div className="grid grid-cols-2 gap-3">
                  {groupSizeOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, groupSize: option.id })}
                      className={`p-3 rounded-lg border-2 text-left transition-all hover:shadow-sm ${
                        formData.groupSize === option.id
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-sm">{option.label}</h4>
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            formData.groupSize === option.id
                              ? "border-primary bg-primary"
                              : "border-muted-foreground/30"
                          }`}
                        >
                          {formData.groupSize === option.id && (
                            <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                type="button"
                onClick={handleNext}
                className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Continue to Date & Time
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <div>
                <Label className="text-base font-semibold mb-2 block">Date</Label>
                {renderCalendar()}
                {formData.date && (
                  <div className="mt-2 p-2 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-xs font-medium text-primary">
                      {new Date(formData.date + "T00:00:00").toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                )}
              </div>

              <div>
                <Label className="text-base font-semibold mb-2 block">Time</Label>
                <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, time: slot.id })}
                      className={`p-2.5 rounded-lg border-2 text-left transition-all hover:shadow-sm ${
                        formData.time === slot.id
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-sm">{slot.label}</h4>
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            formData.time === slot.id ? "border-primary bg-primary" : "border-muted-foreground/30"
                          }`}
                        >
                          {formData.time === slot.id && (
                            <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrev}
                  className="flex-1 h-10 text-sm border-2 bg-transparent"
                >
                  <ArrowLeft className="mr-1 h-3 w-3" />
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={handleNext}
                  className="flex-2 h-10 font-semibold bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 text-sm"
                >
                  Continue to Contact Details
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name *
                  </Label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-10 mt-1 border-2 hover:border-primary/50 focus:border-primary text-sm"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-sm font-medium">
                    Company (optional)
                  </Label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-10 mt-1 border-2 hover:border-primary/50 focus:border-primary text-sm"
                    placeholder="Your Company Ltd"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  Email *
                </Label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-10 mt-1 border-2 hover:border-primary/50 focus:border-primary text-sm"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone *
                </Label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-10 mt-1 border-2 hover:border-primary/50 focus:border-primary text-sm"
                  placeholder="+852 9123 4567"
                />
              </div>

              <div>
                <Label htmlFor="requirements" className="text-sm font-medium">
                  Requirements
                </Label>
                <Textarea
                  placeholder="Special needs?"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="mt-1 min-h-[60px] border-2 hover:border-primary/50 focus:border-primary text-sm"
                />
              </div>

              <div className="flex gap-3 pt-1">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrev}
                  className="flex-1 h-10 text-sm border-2 bg-transparent"
                >
                  <ArrowLeft className="mr-1 h-3 w-3" />
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-2 h-10 text-sm font-bold bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Booking..." : "Book Tour"}
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
