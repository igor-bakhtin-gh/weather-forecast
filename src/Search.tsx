interface SearchProps {
  handleSubmit: (formData: FormData) => void;
}

export default function Search({ handleSubmit }: SearchProps) {
  return (
    <header className="search">
      <search role="search">
        <form action={handleSubmit}>
          <input type="search" name="query" />
          <button type="submit">Search</button>
        </form>
      </search>
    </header>
  );
}
