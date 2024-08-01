import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const CustomizeTemplate = () => {
  const [customization, setCustomization] = useState({
    backgroundColor: '#ffffff',
    textColor: '#000000',
    fontSize: 16,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomization(prev => ({ ...prev, [name]: value }));
  };

  const handleSliderChange = (value) => {
    setCustomization(prev => ({ ...prev, fontSize: value[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customization submitted:', customization);
    // Here you would typically send this data to your backend or AI service
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Customize Your Video Card</h1>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <div className="space-y-2">
          <Label htmlFor="backgroundColor">Background Color</Label>
          <Input
            id="backgroundColor"
            name="backgroundColor"
            type="color"
            value={customization.backgroundColor}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="textColor">Text Color</Label>
          <Input
            id="textColor"
            name="textColor"
            type="color"
            value={customization.textColor}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fontSize">Font Size: {customization.fontSize}px</Label>
          <Slider
            id="fontSize"
            min={12}
            max={32}
            step={1}
            value={[customization.fontSize]}
            onValueChange={handleSliderChange}
          />
        </div>

        <Button type="submit" className="w-full">Apply Customization</Button>
      </form>

      <div className="mt-8 p-4 border rounded" style={{
        backgroundColor: customization.backgroundColor,
        color: customization.textColor,
        fontSize: `${customization.fontSize}px`
      }}>
        <h2 className="font-bold mb-2">Preview</h2>
        <p>This is how your text will look in the video card.</p>
      </div>
    </div>
  );
};

export default CustomizeTemplate;
