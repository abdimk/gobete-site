// Decorative drifting gradient blobs behind the hero (Aceternity-style background).
export function Aurora(): React.JSX.Element {
  return (
    <div className="aurora" aria-hidden="true">
      <span className="blob blob-mint" />
      <span className="blob blob-lilac" />
      <span className="blob blob-navy" />
    </div>
  );
}
