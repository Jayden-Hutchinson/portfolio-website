// export async function submitOrder(order) {
//   try {
//     const response = await fetch("api/email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(order),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to submit order");
//     }

//     setStatusText("Order submitted successfully!");
//     setModalState(ModalState.Ok);
//     console.log(response);
//   } catch {
//     setStatusText("Something went wrong. Please try again.");
//     setModalState(ModalState.Error);
//   }
// }
