interface CheckItemProps {
  title: string;
  description: string;
}

export default function CheckItem({ title, description }: CheckItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex-shrink-0">
        <div className="w-5 h-5 border border-green-400 rounded-sm flex items-center justify-center">
          <span className="text-green-400">✓</span>
        </div>
      </div>
      <div>
        <p className="font-medium text-white">{title}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}
