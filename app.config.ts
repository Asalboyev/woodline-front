export default defineAppConfig({
   meta: {
      title: 'Woodline',
      description: 'Woodline is the best place to find products on your needs'
   },
   ui: {
      primary: 'green',
      button: {
         base: 'duration-200 ease-in-out'
      },
      modal: {
         overlay: {
            background: 'bg-black/[.24] backdrop-blur-sm'
         },
         shadow: '',
         rounded: 'rounded-b-none sm:rounded-2xl'
      }
   }
});
