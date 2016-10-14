from .interfaces import IExercise7Layer
from .interfaces import IMinSizeImageWidget
from plone.app.contenttypes.behaviors.leadimage import ILeadImage
from plone.formwidget.namedfile.widget import NamedImageWidget
from Products.CMFPlone.resources import add_resource_on_request
from z3c.form.interfaces import IFieldWidget
from z3c.form.util import getSpecification
from zope.component import adapter
from zope.interface import implementer
from zope.interface import implements

import json
import z3c.form.widget


class MinSizeImageWidget(NamedImageWidget):
    """A widget for a named file object
    """
    implements(IMinSizeImageWidget)

    def pattern_options(self):
        # provide the pattern options
        return json.dumps({
            'minHeight': 300,
            'minWidth': 300
        })

    def render(self):
        # add the registered resource
        add_resource_on_request(self.request, 'exercise7')
        return super(MinSizeImageWidget, self).render()


@adapter(getSpecification(ILeadImage['image']), IExercise7Layer)
@implementer(IFieldWidget)
def LeadImageMinSizeImageFieldWidget(field, request):
    widget = z3c.form.widget.FieldWidget(field, MinSizeImageWidget(request))
    return widget
