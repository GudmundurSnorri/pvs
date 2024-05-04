"use client";
import { useForm, Controller } from "react-hook-form";
import Button from "../button/Button";

type FormValues = {
  name: string;
  phoneNumber: string;
  email: string;
  title: string;
  description: string;
};

const Form = () => {
  const { control, handleSubmit, setValue, getValues } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      description: "",
      title: "",
    },
    mode: "onChange",
  });

  const onSubmit = () => {
    console.log(getValues());
  };

  return (
    <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-span-1">
        <Controller
          name={"name"}
          control={control}
          render={({ field, formState: { errors } }) => {
            const { value, name, ref } = field;
            return (
              <div className="flex flex-col gap-3">
                <label>Nafn</label>
                <input
                  className="h-8 rounded-md p-2 border border-solid border-red-main"
                  id="CreditCardInput"
                  value={value}
                  ref={ref}
                  required
                  onChange={(e) => setValue(name, e.target.value)}
                />
              </div>
            );
          }}
        />
      </div>
      <div className="col-span-1">
        <Controller
          name={"email"}
          control={control}
          render={({ field, formState: { errors } }) => {
            const { value, name, ref } = field;
            return (
              <div className="flex flex-col gap-3">
                <label>Netfang</label>
                <input
                  className="h-8 rounded-md p-2 border border-solid border-red-main"
                  id={name}
                  value={value}
                  ref={ref}
                  required
                  onChange={(e) => setValue(name, e.target.value)}
                />
              </div>
            );
          }}
        />
      </div>
      <div className="col-span-1">
        <Controller
          name={"phoneNumber"}
          control={control}
          render={({ field, formState: { errors } }) => {
            const { value, name, ref } = field;
            return (
              <div className="flex flex-col gap-3">
                <label>Símanúmer</label>
                <input
                  className="h-8 rounded-md p-2 border border-solid border-red-main"
                  id={name}
                  value={value}
                  ref={ref}
                  required
                  onChange={(e) => setValue(name, e.target.value)}
                />
              </div>
            );
          }}
        />
      </div>
      <div className="col-span-1" />
      <div className="col-span-1">
        <Controller
          name={"title"}
          control={control}
          render={({ field, formState: { errors } }) => {
            const { value, name, ref } = field;
            return (
              <div className="flex flex-col gap-3">
                <label>Viðfangsefni</label>
                <input
                  className="h-8 rounded-md p-2 border border-solid border-red-main"
                  id={name}
                  value={value}
                  ref={ref}
                  required
                  onChange={(e) => setValue(name, e.target.value)}
                />
              </div>
            );
          }}
        />
      </div>
      <div className="col-span-2">
        <Controller
          name={"description"}
          control={control}
          render={({ field, formState: { errors } }) => {
            const { value, name, ref } = field;
            return (
              <div className="flex flex-col gap-3">
                <label>Fyrirspurn</label>
                <textarea
                  className="min-h-80 rounded-md p-2 border border-solid border-red-main"
                  id={name}
                  value={value}
                  ref={ref}
                  required
                  onChange={(e) => setValue(name, e.target.value)}
                />
              </div>
            );
          }}
        />
      </div>
      <div>
        <Button type="submit" text="Senda fyrirspurn" isInverted />
      </div>
    </form>
  );
};

export default Form;
