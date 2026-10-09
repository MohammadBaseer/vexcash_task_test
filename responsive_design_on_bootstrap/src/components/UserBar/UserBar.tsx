interface UserBarProps {
  name: string;
  status: string;
}

export default function UserBar({ name, status }: UserBarProps) {
  return (
    <div className="user-bar d-flex">
      <div className="user-bar-cell user-bar-greeting d-flex flex-column justify-content-center">
        <span className="user-bar-label fw-medium">Hallo,</span>
        <span className="user-bar-value fw-medium">{name}</span>
      </div>
      <div className="user-bar-cell user-bar-status d-flex flex-column justify-content-center align-items-end text-end">
        <span className="user-bar-label fw-medium">

          Status<span className="d-none d-md-inline"> Ihrer Identifizierung</span>
        </span>
        <span className="user-bar-value fw-bold text-success">{status}</span>
      </div>
    </div>
  );
}
