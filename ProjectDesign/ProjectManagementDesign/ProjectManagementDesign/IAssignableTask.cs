﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectManagementDesign
{
    public interface IAssignableTask : ITimeControl, IChargeInfo, ILogInfo
    {
    }
}
