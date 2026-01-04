import React, { useState, useEffect } from 'react';
import { StoredCertificate, getAllCertificates, deleteCertificate, saveCertificate } from '../utils/storage';
import { CertificateData, INITIAL_DATA } from '../types';
import { FileText, Plus, Trash2, Edit2, Search, X, FolderOpen, Calendar, User, Hash, Sparkles } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface Props {
    onLoadCertificate: (data: CertificateData) => void;
    onNewCertificate: () => void;
}

const CertificateDashboard: React.FC<Props> = ({ onLoadCertificate, onNewCertificate }) => {
    const [certificates, setCertificates] = useState<StoredCertificate[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [deletingId, setDeletingId] = useState<string | null>(null);

    useEffect(() => {
        loadCertificates();
    }, []);

    const loadCertificates = () => {
        const allCerts = getAllCertificates();
        setCertificates(allCerts);
    };

    const handleDelete = async (id: string, name: string) => {
        if (!confirm(`Are you sure you want to delete "${name}"? This action cannot be undone.`)) {
            return;
        }

        setDeletingId(id);
        try {
            const success = deleteCertificate(id);
            if (success) {
                loadCertificates();
                toast.success('Certificate deleted successfully');
            } else {
                toast.error('Certificate not found');
            }
        } catch (error) {
            console.error('Error deleting certificate:', error);
            toast.error('Failed to delete certificate');
        } finally {
            setDeletingId(null);
        }
    };

    const handleLoad = (cert: StoredCertificate) => {
        onLoadCertificate(cert.data);
    };

    const filteredCertificates = certificates.filter(cert =>
        cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.certificateNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.customerName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const formatDate = (dateString: string) => {
        try {
            return new Date(dateString).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch {
            return dateString;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 p-4 md:p-8">
                <div className="max-w-7xl mx-auto space-y-8">
                    {/* Header Section */}
                    <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-600/20">
                                        <Sparkles className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                                            Certificate Library
                                        </h1>
                                        <p className="text-slate-500 font-medium mt-1">
                                            Manage and access your calibration certificates
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={onNewCertificate}
                                className="group flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-sm hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0"
                                aria-label="Create new certificate"
                            >
                                <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                                <span>New Certificate</span>
                            </button>
                        </div>

                        {/* Stats Bar */}
                        {certificates.length > 0 && (
                            <div className="flex flex-wrap items-center gap-4 p-4 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-xl shadow-sm">
                                <div className="flex items-center gap-2 text-slate-600">
                                    <FileText size={18} className="text-blue-600" />
                                    <span className="font-semibold">
                                        <span className="text-slate-900 font-bold">{certificates.length}</span> Total Certificates
                                    </span>
                                </div>
                                {searchQuery && (
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <Search size={18} className="text-indigo-600" />
                                        <span className="font-semibold">
                                            <span className="text-slate-900 font-bold">{filteredCertificates.length}</span> Results
                                        </span>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Search Section */}
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors z-10">
                                <Search size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by name, certificate number, or customer..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-12 py-4 bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-900 placeholder:text-slate-400 font-medium shadow-sm hover:shadow-md"
                                aria-label="Search certificates"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1 hover:bg-slate-100 rounded-lg"
                                    aria-label="Clear search"
                                >
                                    <X size={20} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Certificates Grid Section */}
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
                        {filteredCertificates.length === 0 ? (
                            <div className="bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-dashed border-slate-300 p-12 md:p-16 text-center shadow-sm">
                                {certificates.length === 0 ? (
                                    <div className="space-y-6 max-w-md mx-auto">
                                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl mb-4">
                                            <FolderOpen className="text-blue-600" size={48} />
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-bold text-slate-900">No certificates yet</h3>
                                            <p className="text-slate-600 font-medium">
                                                Create your first calibration certificate to get started
                                            </p>
                                        </div>
                                        <button
                                            onClick={onNewCertificate}
                                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0"
                                            aria-label="Create your first certificate"
                                        >
                                            <Plus size={20} />
                                            Create Certificate
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-6 max-w-md mx-auto">
                                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-3xl mb-4">
                                            <Search className="text-indigo-600" size={48} />
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-bold text-slate-900">No certificates found</h3>
                                            <p className="text-slate-600 font-medium">
                                                Try adjusting your search query or clear the search to see all certificates
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setSearchQuery('')}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all border border-slate-200"
                                            aria-label="Clear search"
                                        >
                                            <X size={18} />
                                            Clear Search
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredCertificates.map((cert, index) => (
                                    <div
                                        key={cert.id}
                                        className="group relative bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-slate-200 p-6 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/50 transition-all duration-300 pointer-events-none"></div>

                                        <div className="relative z-10 space-y-4">
                                            {/* Header */}
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 group-hover:scale-110 transition-transform duration-300">
                                                        <FileText className="text-blue-600" size={24} />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="font-bold text-lg text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                                                            {cert.name}
                                                        </h3>
                                                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                                                            Certificate
                                                        </p>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleDelete(cert.id, cert.name)}
                                                    disabled={deletingId === cert.id}
                                                    className="flex-shrink-0 p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                                    title="Delete certificate"
                                                    aria-label={`Delete ${cert.name}`}
                                                >
                                                    {deletingId === cert.id ? (
                                                        <div className="w-5 h-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                                                    ) : (
                                                        <Trash2 size={18} />
                                                    )}
                                                </button>
                                            </div>

                                            {/* Certificate Info */}
                                            <div className="space-y-3 pt-2 border-t border-slate-100">
                                                <div className="flex items-start gap-3">
                                                    <Hash className="text-slate-400 mt-0.5 flex-shrink-0" size={16} />
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Certificate Number</p>
                                                        <p className="text-sm text-slate-900 font-bold mt-0.5 truncate">{cert.certificateNumber}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <User className="text-slate-400 mt-0.5 flex-shrink-0" size={16} />
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Customer</p>
                                                        <p className="text-sm text-slate-900 font-semibold mt-0.5 truncate">{cert.customerName}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <Calendar className="text-slate-400 mt-0.5 flex-shrink-0" size={16} />
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Last Updated</p>
                                                        <p className="text-sm text-slate-700 font-medium mt-0.5">{formatDate(cert.updatedAt)}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Action Button */}
                                            <button
                                                onClick={() => handleLoad(cert)}
                                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-sm hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 active:scale-[0.98] group/btn"
                                                aria-label={`Load ${cert.name}`}
                                            >
                                                <Edit2 size={18} className="group-hover/btn:rotate-12 transition-transform" />
                                                <span>Load Certificate</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateDashboard;
