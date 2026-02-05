// app/settings/actions.ts
'use server';

export async function saveProfile(formData: FormData) {
  console.log(Object.fromEntries(formData));
}
