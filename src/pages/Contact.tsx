import { SectionLayout } from "@/components/SectionLayout";
import { HardShadowButton } from "@/components/ui/HardShadowButton";
import { HardShadowRect } from "@/components/ui/HardShadowRect";
import { useState, useRef, useEffect } from "react";
import { Phone, User, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const contactFields = {
    phone: {
      toCopy: "+505 77046930",
      label: "+505 77046930",
      icon: <Phone />,
    },
    businessEmail: {
      toCopy: "i.arcia135@gmail.com",
      label: "Business: i.arcia135@gmail.com",
      icon: <Mail />,
    },
    personalEmail: {
      toCopy: "iikz87ii@gmail.com",
      label: "Personal/Github: iikz87ii@gmail.com",
      icon: <Mail />,
    },
    location: {
      toCopy: "Chinandega, Chinandega. Nicaragua",
      label: "Chinandega, Chinandega. Nicaragua",
      icon: <MapPin />,
    },
    name: {
      toCopy: "Isaac Antonio Arcia Castro",
      label: "Isaac Antonio Arcia Castro",
      icon: <User />,
    },
  };

  const handleCopy = (fieldKey: string, textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setCopiedField(fieldKey);
    timeoutRef.current = setTimeout(() => {
      setCopiedField(null);
      timeoutRef.current = null;
    }, 1000) as unknown as number;
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const contactData = {
    contact: {
      title: "Contact",
      period: "",
      content: [],
      react: (
        <div className="flex flex-col gap-3 pb-2">
          <div className="md:hidden block">
            Click any field to copy to clipboard
          </div>
          <div className="flex flex-col-reverse w-fit gap-3">
            {Object.entries(contactFields).map(([key, field]) => (
              <HardShadowButton
                key={key}
                className={`${
                  copiedField === key ? "bg-green-200" : "bg-violet-200"
                } flex transition-colors flex-row gap-2 font-extrabold items-center border-3 p-2 w-full rounded-lg`}
                rotate={1.5}
                onClick={() => handleCopy(key, field.toCopy)}
                aria-label={`Copy ${field.label} to clipboard`}
                popUpContent={
                  <HardShadowRect className="text-justify w-full bg-white pt-8 p-2 ">
                    {(copiedField === key && (
                      <div className="w-full text-center">Copied!</div>
                    )) || (
                      <div className="w-full text-center">
                        Copy to clipboard
                      </div>
                    )}
                  </HardShadowRect>
                }
              >
                {field.icon}
                {field.label}
              </HardShadowButton>
            ))}
          </div>
        </div>
      ),
    },
  };

  return <SectionLayout items={contactData} defaultSelected="contact" />;
}
