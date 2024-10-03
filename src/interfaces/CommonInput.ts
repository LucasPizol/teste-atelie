export type CommonInputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement
>;

export interface CommonInputProps {
  onChange: (e: CommonInputChangeEvent) => void;
}
