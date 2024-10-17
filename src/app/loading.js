import { LoaderCircle } from "lucide-react";

function Loading() {
  return (
    <div className="flex flex-row items-center justify-center mx-auto mt-44">
      <button
        type="button"
        className="bg-crimson-500 flex flex-row rounded-sm p-2"
        disabled
      >
        <LoaderCircle
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        />
        Loading...
      </button>
    </div>
  );
}

export default Loading;
