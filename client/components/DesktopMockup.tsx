interface DesktopMockupProps {
  image: string;
  title?: string;
}

export default function DesktopMockup({ image, title }: DesktopMockupProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-full">
        {/* Desktop Frame */}
        <div className="relative bg-black rounded-2xl shadow-2xl border-8 border-black">
          {/* Screen */}
          <div className="relative overflow-hidden bg-foreground rounded-lg">
            <img
              src={image}
              alt={title || "Desktop Screen"}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Bottom Bezel/Stand */}
          <div className="absolute -bottom-6 left-0 right-0 h-4 bg-gray-900 rounded-b-2xl"></div>
        </div>

        {/* Desktop Shadow */}
        <div className="absolute -bottom-4 left-0 right-0 h-3 bg-black/20 rounded-full blur-lg"></div>
      </div>

      {title && (
        <p className="text-sm text-foreground/70 text-center mt-6 max-w-2xl">
          {title}
        </p>
      )}
    </div>
  );
}
