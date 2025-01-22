import React from 'react'

interface FormFieldProps {
    label: string
    error?: string
    children: React.ReactNode
}

const FormField: React.FC<FormFieldProps> = ({ label, error, children }) => (
    <div>
        <label className="block font-medium text-gray-700">
            {label}
        </label>
        <div className="mt-1">
            {children}
        </div>
        {error && <span className="text-red-500">{error}</span>}
    </div>
)

export default FormField