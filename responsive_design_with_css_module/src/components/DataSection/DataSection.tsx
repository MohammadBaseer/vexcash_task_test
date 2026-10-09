import type { SVGProps } from 'react';
import type { FieldGroup, IconComponent, ProfileField, ValueIconName } from '../../types';
import styles from './DataSection.module.css';

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
      {Icon && <Icon className={styles.valueIcon} aria-hidden="true" />}
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
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      {groups.map((fields, groupIndex) => (
        <dl key={groupIndex} className={styles.group}>
          {fields.map((field) => (
            <div key={field.label} className={styles.field}>
              <dt className={styles.label} title={field.label}>
                {field.label}
              </dt>
              <dd className={styles.value}>
                <FieldValue field={field} />
              </dd>
            </div>
          ))}
        </dl>
      ))}
    </section>
  );
}
