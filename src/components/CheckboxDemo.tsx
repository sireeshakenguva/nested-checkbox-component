import React, { useState, useEffect } from 'react';
import NestedCheckbox from './NestedCheckbox';

const CheckboxDemo = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-lg border p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Nested Checkbox Component</h1>
        <p className="text-gray-600 mb-8">
          Demonstration of a nested checkbox system with proper parent-child selection logic.
        </p>
        
        <div className="bg-gray-50 rounded-xl p-6">
          <NestedCheckbox />
        </div>

        {/* Instructions */}
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">How it works:</h3>
          <ul className="space-y-2 text-blue-800">
            <li>• <strong>Select All</strong> - Checks/unchecks all items</li>
            <li>• <strong>Fruits</strong> - Checks/unchecks all fruit items</li>
            <li>• <strong>Vegetables</strong> - Checks/unchecks all vegetable items</li>
            <li>• Individual items affect their parent categories</li>
            <li>• Parent categories show indeterminate state when partially selected</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CheckboxDemo;