import DataSection from '../DataSection/DataSection';
import type { ProfileColumn } from '../../types';
import styles from './ProfileOverview.module.css';

interface ProfileOverviewProps {
  columns: ProfileColumn[];
}

export default function ProfileOverview({ columns }: ProfileOverviewProps) {
  return (
    <div className={styles.columns}>
      {columns.map((sections, index) => (
        <div key={index} className={styles.column}>
          {sections.map((section) => (
            <DataSection key={section.id} title={section.title} groups={section.groups} />
          ))}
        </div>
      ))}
    </div>
  );
}
