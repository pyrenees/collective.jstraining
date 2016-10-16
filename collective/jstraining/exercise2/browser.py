from Products.CMFPlone.resources import add_bundle_on_request
from Products.Five import BrowserView


class Exercise2View(BrowserView):

    def __call__(self):
        # utility function to add resource to rendered page
        add_bundle_on_request(self.request, 'exercise2')
        return super(Exercise2View, self).__call__()
