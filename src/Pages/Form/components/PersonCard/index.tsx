import React from "react";
import { Control, ErrorOption } from "react-hook-form";
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
  rootKey: `${keyof Pick<FormFields, 'persons'>}.${number}`;
  control: Control<FormFields>;
  errors?: {
    [key: string]: ErrorOption;
  };
}

export const PersonCard: React.FC<PersonCardProps> = React.forwardRef(({ onDelete, control, rootKey, errors }, _) => {
  return (
    <PersonCardContainer>
      <section className="row-box">
        <Input
          inputProps={{ placeholder: "Nome *" }}
          register={control.register(`${rootKey}.name`)}
          error={errors?.name}
        />
        <Input
          inputProps={{ placeholder: "Sobrenome *" }}
          register={control.register(`${rootKey}.lastName`)}
          error={errors?.lastName}
        />

        <TrashIcon onClick={onDelete} />
      </section>

      <Select
        options={roleOptions}
        placeholder="Cargo *"
        style={{ marginTop: 16 }}
        register={control.register(`${rootKey}.role`)}
        error={errors?.role}
      />

      <GenreInput
        name={`${rootKey}.genre`}
        options={genreOptions}
        register={control.register(`${rootKey}.genre`)}
      />
    </PersonCardContainer>
  )
})
