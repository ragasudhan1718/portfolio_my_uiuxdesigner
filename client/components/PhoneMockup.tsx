interface PhoneMockupProps {
  image: string;
  title?: string;
}

export default function PhoneMockup({ image, title }: PhoneMockupProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-full max-w-xs">
        {/* Phone Frame */}
        <div
          className="relative bg-black rounded-3xl shadow-2xl"
          style={{ aspectRatio: "9/19" }}
        >
          {/* Camera Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-3xl z-10"></div>

          {/* Screen */}
          <div className="absolute inset-2 top-8 rounded-2xl overflow-hidden bg-foreground">
            <img
              src={image}
              alt={title || "App Screen"}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bezel */}
          <div className="absolute inset-0 rounded-3xl border-8 border-black pointer-events-none"></div>
        </div>

        {/* Phone Shadow */}
        <div className="absolute -bottom-2 left-0 right-0 h-2 bg-black/20 rounded-full blur-lg"></div>
      </div>

      {title && (
        <p className="text-sm text-foreground/70 text-center mt-4 max-w-xs">
          {title}
        </p>
      )}
    </div>
  );
}
