import React from "react";

const CircularProgress: React.FC = () => {
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

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>

        {/*  با استفاده از -rotate-90، نقطه شروع رسم را از سمت راست به بالای دایره منتقل می‌کنیم.  */}
        <svg width={size} height={size} className="transform -rotate-90">

          {/*  این دایره لایه‌ی زیرین است که مسیر حرکت تایمر را نشان می‌دهد.  */}
          <circle
            cx={size / 2} // مختصات مرکز دایره در محور X (دقیقاً وسط باکس)
            cy={size / 2} // مختصات مرکز دایره در محور Y (دقیقاً وسط باکس)
            r={radius} //شعاع دایره
            stroke="#1e293b" 
            strokeWidth={strokeWidth} 
            fill="transparent"
          />

        </svg>
      </div>
    </div>
  );
};

export default CircularProgress;
