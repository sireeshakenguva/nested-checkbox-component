import React, { useState, useEffect } from 'react';
import { Check, Minus } from 'lucide-react';

interface CheckboxItem {
  id: string;
  label: string;
  checked: boolean;
}

interface CheckboxCategory {
  id: string;
  label: string;
  items: CheckboxItem[];
}

const NestedCheckbox = () => {
  const [categories, setCategories] = useState<CheckboxCategory[]>([
    {
      id: 'fruits',
      label: 'Fruits',
      items: [
        { id: 'apple', label: 'Apple', checked: false },
        { id: 'banana', label: 'Banana', checked: false },
        { id: 'orange', label: 'Orange', checked: false },
        { id: 'grape', label: 'Grape', checked: false },
      ]
    },
    {
      id: 'vegetables',
      label: 'Vegetables',
      items: [
        { id: 'carrot', label: 'Carrot', checked: false },
        { id: 'broccoli', label: 'Broccoli', checked: false },
        { id: 'spinach', label: 'Spinach', checked: false },
        { id: 'tomato', label: 'Tomato', checked: false },
      ]
    }
  ]);

  // Calculate checkbox states
  const getAllItems = () => {
    return categories.flatMap(category => category.items);
  };

  const allItems = getAllItems();
  const allChecked = allItems.every(item => item.checked);
  const someChecked = allItems.some(item => item.checked);
  const selectAllIndeterminate = someChecked && !allChecked;

  const getCategoryState = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) return { checked: false, indeterminate: false };
    
    const checkedItems = category.items.filter(item => item.checked);
    const allChecked = checkedItems.length === category.items.length;
    const someChecked = checkedItems.length > 0;
    
    return {
      checked: allChecked,
      indeterminate: someChecked && !allChecked
    };
  };

  // Handle Select All
  const handleSelectAll = () => {
    const newCheckedState = !allChecked;
    setCategories(prevCategories =>
      prevCategories.map(category => ({
        ...category,
        items: category.items.map(item => ({
          ...item,
          checked: newCheckedState
        }))
      }))
    );
  };

  // Handle Category Selection
  const handleCategoryChange = (categoryId: string) => {
    setCategories(prevCategories =>
      prevCategories.map(category => {
        if (category.id === categoryId) {
          const categoryState = getCategoryState(categoryId);
          const newCheckedState = !categoryState.checked;
          
          return {
            ...category,
            items: category.items.map(item => ({
              ...item,
              checked: newCheckedState
            }))
          };
        }
        return category;
      })
    );
  };

  // Handle Individual Item Selection
  const handleItemChange = (categoryId: string, itemId: string) => {
    setCategories(prevCategories =>
      prevCategories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            items: category.items.map(item => {
              if (item.id === itemId) {
                return { ...item, checked: !item.checked };
              }
              return item;
            })
          };
        }
        return category;
      })
    );
  };

  // Custom Checkbox Component
  const CustomCheckbox = ({ 
    checked, 
    indeterminate = false, 
    onChange, 
    label, 
    className = "" 
  }: {
    checked: boolean;
    indeterminate?: boolean;
    onChange: () => void;
    label: string;
    className?: string;
  }) => (
    <label className={`flex items-center space-x-3 cursor-pointer group ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
            checked || indeterminate
              ? 'bg-amber-600 border-amber-600'
              : 'border-gray-300 group-hover:border-amber-400'
          }`}
        >
          {indeterminate ? (
            <Minus className="w-3 h-3 text-white" />
          ) : checked ? (
            <Check className="w-3 h-3 text-white" />
          ) : null}
        </div>
      </div>
      <span className={`text-sm font-medium transition-colors ${
        checked ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
      }`}>
        {label}
      </span>
    </label>
  );

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Food Categories</h2>
      
      <div className="space-y-4">
        {/* Select All */}
        <CustomCheckbox
          checked={allChecked}
          indeterminate={selectAllIndeterminate}
          onChange={handleSelectAll}
          label="Select All"
          className="p-3 bg-white rounded-lg border-2 border-amber-200 hover:border-amber-300 transition-colors"
        />

        {/* Categories */}
        <div className="space-y-4 ml-4">
          {categories.map(category => {
            const categoryState = getCategoryState(category.id);
            
            return (
              <div key={category.id} className="space-y-3">
                <CustomCheckbox
                  checked={categoryState.checked}
                  indeterminate={categoryState.indeterminate}
                  onChange={() => handleCategoryChange(category.id)}
                  label={category.label}
                  className="p-2 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                />
                
                {/* Individual Items */}
                <div className="space-y-2 ml-6">
                  {category.items.map(item => (
                    <CustomCheckbox
                      key={item.id}
                      checked={item.checked}
                      onChange={() => handleItemChange(category.id, item.id)}
                      label={item.label}
                      className="p-2 hover:bg-gray-50 rounded transition-colors"
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Items Display */}
      <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
        <h3 className="text-lg font-semibold text-green-900 mb-2">Selected Items:</h3>
        <div className="flex flex-wrap gap-2">
          {allItems
            .filter(item => item.checked)
            .map(item => (
              <span
                key={item.id}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
              >
                {item.label}
              </span>
            ))}
          {allItems.filter(item => item.checked).length === 0 && (
            <span className="text-green-700 italic">No items selected</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NestedCheckbox;