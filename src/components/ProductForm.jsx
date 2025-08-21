import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useProducts } from "../hooks/useProducts";

export const ProductForm = ({ updateProduct, handleProductIsUpdated }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // Pour remplir les champs 'un par un' (on doit faire un setValue par input)
    reset,
  } = useForm();

  const { updateProduct: fctUpdateProduct } = useProducts();

  const submit = (data) => {
    console.log(data);
    const p = { ...updateProduct, ...data };
    fctUpdateProduct(p)
      .then((resp) => {
        console.log("Mise à jour OK", resp);
        handleProductIsUpdated(resp.data);
      })
      .finally(() => document.getElementById("my_modal").close());
  };

  useEffect(() => {
    console.log("produit à mettre à jour", updateProduct);
    // setValue("title", updateProduct.title); // Exemple pour remplir une seule input
    reset(updateProduct); // Avec le Reset, on peut utiliser un objet en paramètre. Ce qui a pour effet de 'reset' le formulaire + de remplir l'ensmeble des inputs
  }, [updateProduct]);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input
        type="text"
        placeholder="nom"
        {...register("title", {
          required: "Le nom est obligatoire",
          maxLength: {
            value: 50,
            message: "Le nom ne doit pas contenir plus de 50 caractères",
          },
        })}
      />
      <span>{errors.title && errors.title.message}</span>
      <input
        type="number"
        placeholder="prix"
        {...register("price", {
          required: "Le prix est obligatoire",
          min: {
            value: 0,
            message: "Le prix doit etre superieur a 0",
          },
        })}
      />
      <span>{errors.price && errors.price.message}</span>

      <input
        type="text"
        placeholder="description"
        {...register("description", {
          required: "La description est obligatoire",
        })}
      />
      <span>{errors.description && errors.description.message}</span>

      <input type="text" placeholder="catégorie" {...register("category")} />

      <button type="submit">Soumettre</button>
    </form>
  );
};
