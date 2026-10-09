import DataSection from '../DataSection/DataSection';
import type { ProfileColumn } from '../../types';

interface ProfileOverviewProps {
  columns: ProfileColumn[];
}

export default function ProfileOverview({ columns }: ProfileOverviewProps) {
  return (
    <div className="profile-overview">

      <div className="row">
        {columns.map((sections, index) => (
          <div key={index} className="profile-column col-12">
            {sections.map((section) => (
              <DataSection key={section.id} title={section.title} groups={section.groups} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
