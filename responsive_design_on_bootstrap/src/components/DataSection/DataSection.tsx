import type { SVGProps } from 'react';
import type { FieldGroup, IconComponent, ProfileField, ValueIconName } from '../../types';

function MaleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="9.5" cy="14.5" r="6" />
      <path d="M14 10 L21 3 M15 3 H21 V9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const VALUE_ICONS: Record<ValueIconName, IconComponent> = {
  male: MaleIcon,
};

interface FieldValueProps {
  field: ProfileField;
}

function FieldValue({ field }: FieldValueProps) {
  const Icon = field.icon ? VALUE_ICONS[field.icon] : null;

  return (
    <>
      {Icon && <Icon className="data-section-value-icon" aria-hidden="true" />}
      <span>{field.value}</span>
      {field.unit && <span>{field.unit}</span>}
    </>
  );
}

interface DataSectionProps {
  title: string;
  groups: FieldGroup[];
}

export default function DataSection({ title, groups }: DataSectionProps) {
  return (
    <section className="data-section">
      <h2 className="data-section-title">{title}</h2>

      {groups.map((fields, groupIndex) => (
        <dl key={groupIndex} className="data-section-group mb-0">
          {fields.map((field) => (
            <div key={field.label} className="data-section-field">
              <dt className="data-section-label fw-light" title={field.label}>
                {field.label}
              </dt>
              <dd className="data-section-value d-flex flex-wrap align-items-center fw-medium mb-0">
                <FieldValue field={field} />
              </dd>
            </div>
          ))}
        </dl>
      ))}
    </section>
  );
}
