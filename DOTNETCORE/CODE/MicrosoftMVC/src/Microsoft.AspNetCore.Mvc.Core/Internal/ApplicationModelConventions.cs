// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc.ApplicationModels;

namespace Microsoft.AspNetCore.Mvc.Internal
{
    /// <summary>
    /// Applies conventions to a <see cref="ApplicationModel"/>.
    /// </summary>
    public static class ApplicationModelConventions
    {
        /// <summary>
        /// Applies conventions to a <see cref="ApplicationModel"/>.
        /// </summary>
        /// <param name="applicationModel">The <see cref="ApplicationModel"/>.</param>
        /// <param name="conventions">The set of conventions.</param>
        public static void ApplyConventions(
            ApplicationModel applicationModel,
            IEnumerable<IApplicationModelConvention> conventions)
        {
            if (applicationModel == null)
            {
                throw new ArgumentNullException(nameof(applicationModel));
            }

            if (conventions == null)
            {
                throw new ArgumentNullException(nameof(conventions));
            }

            // Conventions are applied from the outside-in to allow for scenarios where an action overrides
            // a controller, etc.
            foreach (var convention in conventions)
            {
                convention.Apply(applicationModel);
            }

            // First apply the conventions from attributes in decreasing order of scope.
            foreach (var controller in applicationModel.Controllers)
            {
                // ToArray is needed here to prevent issues with modifying the attributes collection
                // while iterating it.
                var controllerConventions =
                    controller.Attributes
                        .OfType<IControllerModelConvention>()
                        .ToArray();

                foreach (var controllerConvention in controllerConventions)
                {
                    controllerConvention.Apply(controller);
                }

                foreach (var action in controller.Actions)
                {
                    // ToArray is needed here to prevent issues with modifying the attributes collection
                    // while iterating it.
                    var actionConventions =
                        action.Attributes
                            .OfType<IActionModelConvention>()
                            .ToArray();

                    foreach (var actionConvention in actionConventions)
                    {
                        actionConvention.Apply(action);
                    }

                    foreach (var parameter in action.Parameters)
                    {
                        // ToArray is needed here to prevent issues with modifying the attributes collection
                        // while iterating it.
                        var parameterConventions =
                            parameter.Attributes
                                .OfType<IParameterModelConvention>()
                                .ToArray();

                        foreach (var parameterConvention in parameterConventions)
                        {
                            parameterConvention.Apply(parameter);
                        }
                    }
                }
            }
        }
    }
}