import { useFormStatus } from "react-dom";
import style from "./Search.module.css";

interface SearchProps {
  handleSubmit: (formData: FormData) => void;
}

function Submit() {
  const { pending } = useFormStatus();
  return (
    <>
      <input type="search" name="query" disabled={pending} />
      <button type="submit" disabled={pending}>
        Search
      </button>
    </>
  );
}

export default function Search({ handleSubmit }: SearchProps) {
  return (
    <header className={style.search}>
      <search role="search">
        <form action={handleSubmit}>
          <Submit />
        </form>
      </search>
    </header>
  );
}
