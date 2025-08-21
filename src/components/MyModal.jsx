export const MyModal = ({ content }) => {
  /* You can open the modal using document.getElementById('my_modal').showModal() method */

  return (
    <dialog id="my_modal" className="modal">
      <div className="modal-box">
        {content}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            Fermer ✕
          </button>
        </form>
      </div>
    </dialog>
  );
};
