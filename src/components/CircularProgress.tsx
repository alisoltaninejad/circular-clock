import React from "react";
interface CircularProgressProps {
  value: number;
  max: number;
  label: string;
  color: string;
}
const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  max,
  label,
  color,
}) => {
  // --- محاسبات مهندسی و هندسی SVG ---
  const size = 150;
  const strokeWidth = 10;
  /**
   * محاسبه شعاع (Radius) دایره:
   * ما نصف ضخامت خط را از شعاع کل کم می‌کنیم (size / 2 - strokeWidth / 2).
   * این کار باعث می‌شود دایره دقیقاً در مرکز باکس قرار بگیرد و لبه‌های آن
   * به دلیل ضخامت خط، از کادر SVG بیرون نزند (Pixel Perfect).
   */
  const radius = (size - strokeWidth) / 2;
  /**
   * محاسبه محیط دایره (Circumference):
   * این عدد به عنوان طول کل "نوار پیشرفت" در ویژگی stroke-dasharray استفاده می‌شود.
   */
  const circumference = 2 * Math.PI * radius;

  /**
   * محاسبه آفست (Offset) - جادوی حرکت دایره:
   * این مقدار تعیین می‌کند که چه مقدار از محیط دایره "خالی" بماند.
   * فرمول: (محیط کل) منهای (درصد طی شده از محیط).
   * value=0 => آفست برابر با کل محیط است (دایره خالی دیده می‌شود).
   * value=max => آفست صفر است (دایره کامل دیده می‌شود).
   */
  const offset = circumference - (value / max) * circumference;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} >
          {/*  این دایره لایه‌ی زیرین است که مسیر حرکت تایمر را نشان می‌دهد.  */}
          <circle
            cx={size / 2} // مختصات مرکز دایره در محور X (دقیقاً وسط باکس)
            cy={size / 2} // مختصات مرکز دایره در محور Y (دقیقاً وسط باکس)
            r={radius} //شعاع دایره
            stroke="#1e293b"
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          <circle
           /*  با استفاده از -rotate-90، نقطه شروع رسم را از سمت راست به بالای دایره منتقل می‌کنیم.  */
           className="transform -rotate-90 origin-center"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            /* ۱. ایجاد خط‌چین: طول هر تکه خط برابر با کل محیط دایره است */
            strokeDasharray={circumference}
            /* ۲. جابجایی خط‌چین (آفست): تعیین می‌کند چقدر از خط دیده شود */
            strokeDashoffset={offset}
            /* ۳. گرد کردن لبه‌های خط (برای زیبایی بیشتر) */
            strokeLinecap="round"
            style={{
           /* ۴. انیمیشن نرم: وقتی offset تغییر می‌کند، ۱ ثانیه طول بکشد تا به جای جدید برسد */   
              transition: "stroke-dashoffset 1s linear",
              /* ۵. درخشش نئونی: ایجاد یک سایه رنگی دور خط */
              filter: `drop-shadow(0 0 8px ${color}88)`,
            }}
          />

          <text  x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize={size * 0.25} fill={color} > {value} </text>
        </svg>

        <span
          className="block my-4 text-[10px] text-center uppercase tracking-widest font-bold"
          style={{ color: color }}>
          {label}
        </span>
      </div>
    </div>
  );
};

export default CircularProgress;
