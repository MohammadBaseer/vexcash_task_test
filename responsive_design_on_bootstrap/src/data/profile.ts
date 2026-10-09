import type { ProfileColumn, User } from '../types';

export const USER: User = {
  fullName: 'John Smith',
  status: 'Identifiziert',
};

export const PROFILE_COLUMNS: ProfileColumn[] = [
  [
    {
      id: 'personal',
      title: 'Persönliche Daten',
      groups: [
        [{ label: 'Anrede', value: 'Herr', icon: 'male' }],
        [
          { label: 'Vorname', value: 'John' },
          { label: 'Nachname', value: 'Smith' },
        ],
        [
          { label: 'Geburtsdatum', value: '27.08.1997' },
          { label: 'Geburtsort', value: 'Sindelfingen' },
        ],
        [{ label: 'Mobiltelefon-Nummer', value: '01606112233' }],
        [{ label: 'Staatsbürgerschaft', value: 'Deutschland' }],
      ],
    },
  ],
  [
    {
      id: 'family',
      title: 'Familiäre Angaben',
      groups: [
        [
          { label: 'Familienstand', value: 'verheiratet' },
          { label: 'Kinder', value: '2' },
          { label: 'Kindergeld', value: 'Ja' },
        ],
      ],
    },
    {
      id: 'employment',
      title: 'Beschäftigungsdaten',
      groups: [
        [
          { label: 'Beschäftigungsstatus', value: 'Vollzeitanstellung' },
          { label: 'Arbeiten Sie in Kurzarbeit?', value: 'Nein' },
        ],
        [{ label: 'Nettoeinkommen', value: '2380,00', unit: 'EUR' }],
      ],
    },
  ],
];
