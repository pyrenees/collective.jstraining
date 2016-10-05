from Products.CMFPlone.resources import add_resource_on_request
from Products.Five import BrowserView


class Exercise1View(BrowserView):

    def __call__(self):
        # utility function to add resource to rendered page
        add_resource_on_request(self.request, 'exercise1')
        return super(Exercise1View, self).__call__()
