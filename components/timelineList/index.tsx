import { TimelineProps } from '@/types';

export default function TimelineList(props: TimelineProps) {
  const { emoji, year, where, descriptions } = props;

  return (
    <li className="relative border-l-[1.5px] border-green-600 pl-6 pb-6 last:border-0 last:pb-0 before:absolute before:top-0 before:left-[-10px] before:w-4 before:h-4 before:bg-green-100 before:rounded-[50%] before:border-[1px] before:border-green-600 before:shadow-[2px_1px_0_rgb(22,163,74)] before:last:animate-spin">
      <h3 className="mb-1 text-base text-green-100">
        <span role="img" className="mr-2">
          {emoji}
        </span>
        {year}
      </h3>
      <h4 className="text-sm">{where}</h4>
      {descriptions.map((description, idx) => (
        <h5 key={idx} className="text-xs mt-1 ml-6 first-of-type:mt-2">
          <span role="img" className="mr-3 text-green-100">
            •
          </span>
          {description}
        </h5>
      ))}
    </li>
  );
}
