from django.http import Http404


class GetObjectMixin(object):
    @staticmethod
    def get_object(model, pk):
        try:
            post = model.objects.get(pk=pk)
        except model.DoesNotExist:
            raise Http404
        return post
