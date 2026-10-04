export async function POST() {
  return Response.json(
    { error: "Checkout is not configured yet." },
    { status: 501 },
  );
}