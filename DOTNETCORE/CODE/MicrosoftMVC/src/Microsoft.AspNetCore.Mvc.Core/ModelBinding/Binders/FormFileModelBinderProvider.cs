﻿// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using System.Reflection;
using Microsoft.AspNetCore.Http;

namespace Microsoft.AspNetCore.Mvc.ModelBinding.Binders
{
    /// <summary>
    /// An <see cref="IModelBinderProvider"/> for <see cref="IFormFile"/>, collections
    /// of <see cref="IFormFile"/>, and <see cref="IFormFileCollection"/>.
    /// </summary>
    public class FormFileModelBinderProvider : IModelBinderProvider
    {
        /// <inheritdoc />
        public IModelBinder GetBinder(ModelBinderProviderContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException(nameof(context));
            }

            var modelType = context.Metadata.ModelType;
            if (modelType == typeof(IFormFile) ||
                modelType == typeof(IFormFileCollection) ||
                typeof(IEnumerable<IFormFile>).GetTypeInfo().IsAssignableFrom(modelType.GetTypeInfo()))
            {
                return new FormFileModelBinder();
            }

            return null;
        }
    }
}
