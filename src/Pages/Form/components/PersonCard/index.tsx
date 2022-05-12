import React from "react";
import { Input } from "../../../../components/Form/Input"
import { Select } from "../../../../components/Form/Select"
import { FormFields, Genre } from "../../../../models/FormFields";
import { PersonCardContainer, TrashIcon, GenreInput } from "./styles"

const genreOptions = [
  { label: 'Masculino', value: Genre.Male },
  { label: 'Feminino', value: Genre.Female },
];

const roleOptions = [
  { label: 'Desenvolvedor I', value: 'dev-1' },
  { label: 'Desenvolvedor II', value: 'dev-2' },
  { label: 'Desenvolvedor III', value: 'dev-3' },
  { label: 'Desenvolvedor IV', value: 'dev-4' },
  { label: 'Desenvolvedor V', value: 'dev-5' },
  { label: 'Desenvolvedor VI', value: 'dev-6' },
];

type PersonCardProps = {
  onDelete?: () => void;
}

export const PersonCard: React.FC<PersonCardProps> = React.forwardRef(({ onDelete }, _) => {
  return (
    <PersonCardContainer>
      <section className="row-box">
        <Input inputProps={{ placeholder: "Nome *" }} />
        <Input inputProps={{ placeholder: "Sobrenome *" }} />

        <TrashIcon onClick={onDelete} />
      </section>

      <Select
        options={roleOptions}
        placeholder="Cargo *"
        style={{ marginTop: 16 }}
      />

      <GenreInput name="genre" options={genreOptions} />
    </PersonCardContainer>
  )
})
