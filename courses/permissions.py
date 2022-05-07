from django.http import Http404

class MembersPermissionsMixin:
    def has_permissions(self):
        return self.request.user in self.get_object().members.all()

    def dispatch(self, request, *args, **kwargs):
        if not self.has_permissions():
            raise Http404()
        return super().dispatch(request, *args, **kwargs)
