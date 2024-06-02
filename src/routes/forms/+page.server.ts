import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';

const schema = z.object({
  name: z.string().default('Hello world!'),
  email: z.string().email()
});

export const load = async () => {
  const form = await superValidate(zod(schema));

  return { form };
};

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(schema));
    console.log('form: ', form);

    if (!form.valid) {
      return fail(400, { form });
    }

    return message(form, 'Form Successfully submitted');
  }
};
