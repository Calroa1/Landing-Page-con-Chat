interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export default function FeatureCard({ title, description, icon, color }: FeatureCardProps) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-800 p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
