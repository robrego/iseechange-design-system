import React from 'react';

// Figma source: Components › Popups
//   states    (id: 2316:5030) — Steps: 1–7, size: 360|768, Steps number: 4|5|6 (29 variants)
//   Progress 1 (id: 3740:4683) — Step: 1–6 (6 variants)
//   dot        (id: 2316:5011) — Property 1: empty|active|filled|filled_hover (4 variants)

export type DotState        = 'empty' | 'active' | 'filled' | 'filled_hover';
export type ProgressSize    = '360' | '768';
export type ProgressStepsCount = 4 | 5 | 6;

export interface ProgressStatesProps {
  currentStep:  number;
  totalSteps:   ProgressStepsCount;
  size?:        ProgressSize;
  className?:   string;
}

export function ProgressStates({
  currentStep,
  totalSteps = 4,
  size       = '360',
  className,
}: ProgressStatesProps) {
  return (
    <div
      data-size={size}
      data-total={totalSteps}
      data-current={currentStep}
      className={['isc-progress-states', className].filter(Boolean).join(' ')}
      role="progressbar"
      aria-valuenow={currentStep}
      aria-valuemin={1}
      aria-valuemax={totalSteps}
    >
      {Array.from({ length: totalSteps }, (_, i) => {
        const state: DotState =
          i + 1 < currentStep  ? 'filled'  :
          i + 1 === currentStep ? 'active'  : 'empty';
        return (
          <span key={i} data-state={state} className="isc-progress-states__dot" />
        );
      })}
    </div>
  );
}
