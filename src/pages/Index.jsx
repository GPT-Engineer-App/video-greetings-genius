import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [eventDetails, setEventDetails] = useState({
    eventType: '',
    recipientName: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleEventTypeChange = (value) => {
    setEventDetails(prev => ({ ...prev, eventType: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event details submitted:', eventDetails);
    // Here you would typically send this data to your backend or AI service
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to VidCardz</h1>
      <p className="text-center mb-8">Create personalized video cards for your special occasions!</p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <div className="space-y-2">
          <Label htmlFor="eventType">Event Type</Label>
          <Select onValueChange={handleEventTypeChange} value={eventDetails.eventType}>
            <SelectTrigger>
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="birthday">Birthday</SelectItem>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="anniversary">Anniversary</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="recipientName">Recipient's Name</Label>
          <Input
            id="recipientName"
            name="recipientName"
            value={eventDetails.recipientName}
            onChange={handleInputChange}
            placeholder="Enter recipient's name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Personal Message</Label>
          <Input
            id="message"
            name="message"
            value={eventDetails.message}
            onChange={handleInputChange}
            placeholder="Enter your personal message"
          />
        </div>

        <Button type="submit" className="w-full">Create Video Card</Button>
      </form>
    </div>
  );
};

export default Index;
