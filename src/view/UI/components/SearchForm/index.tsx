import { FC, useState } from "react";
import { IFormData, ISearchForm } from "./types";
import { Form } from "./components/Form";
import { MinifiedForm } from "./components/MinifiedForm";
import { SubmitHandler } from "react-hook-form";
import { useViewModel } from "../../hooks";
import { useSearchAnalytics } from "./useHeaderAnalytics";

export const SearchForm: FC<ISearchForm> = ({
  loading = false,
  origin,
  destination,
  minified = false,
  className,
  onSearch,
  localities,
  localitiesLoading = false,
  gaCategory,
}) => {
  const [isMinified, setMinified] = useState(minified);
  const { getList } = useViewModel("locality");
  const { searchEvent, setMinifiedEvent } = useSearchAnalytics(gaCategory);

  const handleSetMinified = () => {
    setMinifiedEvent(isMinified);
    setMinified(!isMinified);
  };

  const handleSearch: SubmitHandler<IFormData> = (args) => {
    searchEvent();
    onSearch(args);
    minified && setMinified(true);
  };

  if (isMinified) {
    return (
      <MinifiedForm
        gaCategory={gaCategory}
        loading={loading}
        className={className}
        origin={origin}
        destination={destination}
        onExpand={handleSetMinified}
      />
    );
  }

  return (
    <Form
      gaCategory={gaCategory}
      localitiesLoading={localitiesLoading}
      localities={localities}
      loading={loading}
      minified={minified}
      origin={origin}
      className={className}
      destination={destination}
      onSearch={handleSearch}
      onExpand={handleSetMinified}
      getLocalities={getList}
    />
  );
};
