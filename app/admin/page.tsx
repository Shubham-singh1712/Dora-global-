"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { useRouter } from "next/navigation";
import {
  Globe,
  LogOut,
  Inbox,
  Clock,
  CheckCircle2,
  Search,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  Mail,
  Phone,
  Building2,
  Briefcase,
  Tag,
  MessageSquare,
  TrendingUp,
  Loader2,
  AlertTriangle,
  CheckCheck,
  Calendar,
  ChevronDown,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type EnquiryStatus = "new" | "contacted" | "in_progress" | "closed";

interface Enquiry {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  service: string;
  industry: string | null;
  project_type: string | null;
  message: string;
  source: string;
  status: EnquiryStatus;
  created_at: string;
  updated_at: string;
}

interface Stats {
  total: number;
  new: number;
  contacted: number;
  in_progress: number;
  closed: number;
}

interface DashboardData {
  data: Enquiry[];
  total: number;
  page: number;
  pageSize: number;
  stats: Stats;
}

interface Toast {
  id: string;
  message: string;
  type: "success" | "error";
}

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const SERVICES = [
  "Translation",
  "Remote Interpretation",
  "On-Site Interpretation",
  "Sign Language Interpretation",
  "Transcription",
  "In-Language Coding",
  "Website Globalization",
];

const STATUS_CONFIG: Record<
  EnquiryStatus,
  { label: string; color: string; bg: string; border: string; dot: string }
> = {
  new: {
    label: "New",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    dot: "bg-blue-500",
  },
  contacted: {
    label: "Contacted",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    dot: "bg-amber-500",
  },
  in_progress: {
    label: "In Progress",
    color: "text-violet-700",
    bg: "bg-violet-50",
    border: "border-violet-200",
    dot: "bg-violet-500",
  },
  closed: {
    label: "Closed",
    color: "text-slate-500",
    bg: "bg-slate-100",
    border: "border-slate-200",
    dot: "bg-slate-400",
  },
};

const STATUS_OPTIONS: EnquiryStatus[] = [
  "new",
  "contacted",
  "in_progress",
  "closed",
];

const PAGE_SIZE = 12;

// ─────────────────────────────────────────────────────────────────────────────
// Utility
// ─────────────────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return "< 1h ago";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return formatDate(iso);
}

// ─────────────────────────────────────────────────────────────────────────────
// Toast System
// ─────────────────────────────────────────────────────────────────────────────

function ToastContainer({ toasts, onDismiss }: { toasts: Toast[]; onDismiss: (id: string) => void }) {
  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col gap-2 pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg shadow-elevated border text-sm font-medium animate-slide-up ${
            t.type === "success"
              ? "bg-white border-emerald-200 text-emerald-800"
              : "bg-white border-red-200 text-red-700"
          }`}
        >
          {t.type === "success" ? (
            <CheckCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          ) : (
            <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
          )}
          <span>{t.message}</span>
          <button
            onClick={() => onDismiss(t.id)}
            aria-label="Dismiss notification"
            className="ml-2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}

function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: Toast["type"] = "success") => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, addToast, dismissToast };
}

// ─────────────────────────────────────────────────────────────────────────────
// Status Badge (display-only)
// ─────────────────────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: EnquiryStatus }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${cfg.bg} ${cfg.color} ${cfg.border}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Status Selector (interactive dropdown)
// ─────────────────────────────────────────────────────────────────────────────

function StatusSelector({
  enquiryId,
  currentStatus,
  onUpdate,
}: {
  enquiryId: string;
  currentStatus: EnquiryStatus;
  onUpdate: (id: string, status: EnquiryStatus, success: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = async (status: EnquiryStatus) => {
    if (status === currentStatus) {
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
    setIsUpdating(true);

    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: enquiryId, status }),
      });
      const json = await res.json();
      onUpdate(enquiryId, status, res.ok && json.success);
    } catch {
      onUpdate(enquiryId, currentStatus, false);
    } finally {
      setIsUpdating(false);
    }
  };

  const cfg = STATUS_CONFIG[currentStatus];

  return (
    <div className="relative" ref={ref}>
      <button
        id={`status-${enquiryId}`}
        onClick={() => !isUpdating && setIsOpen((v) => !v)}
        disabled={isUpdating}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border transition-opacity cursor-pointer hover:opacity-75 disabled:cursor-wait ${cfg.bg} ${cfg.color} ${cfg.border}`}
      >
        {isUpdating ? (
          <Loader2 className="w-3 h-3 animate-spin" />
        ) : (
          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
        )}
        {cfg.label}
        {!isUpdating && <ChevronDown className="w-3 h-3 opacity-60" />}
      </button>

      {isOpen && (
        <div className="absolute z-50 top-full left-0 mt-1.5 w-40 bg-white border border-slate-200 rounded-xl shadow-elevated py-1 overflow-hidden">
          {STATUS_OPTIONS.map((s) => {
            const c = STATUS_CONFIG[s];
            return (
              <button
                key={s}
                id={`status-opt-${enquiryId}-${s}`}
                onClick={() => handleSelect(s)}
                className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors ${
                  s === currentStatus ? "opacity-40 cursor-default" : ""
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                {c.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Enquiry Detail Drawer
// ─────────────────────────────────────────────────────────────────────────────

function EnquiryDrawer({
  enquiry,
  onClose,
  onStatusUpdate,
}: {
  enquiry: Enquiry | null;
  onClose: () => void;
  onStatusUpdate: (id: string, status: EnquiryStatus, success: boolean) => void;
}) {
  useEffect(() => {
    if (!enquiry) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [enquiry, onClose]);

  if (!enquiry) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={`Enquiry from ${enquiry.name}`}
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl overflow-y-auto flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 sticky top-0 bg-white z-10">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-0.5">
              Enquiry Detail
            </p>
            <h2 className="text-base font-semibold text-slate-900 leading-snug truncate">
              {enquiry.name}
            </h2>
          </div>
          <button
            id="drawer-close"
            onClick={onClose}
            className="ml-3 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
            aria-label="Close detail panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 p-6 space-y-6">
          {/* Status + Time */}
          <div className="flex items-center justify-between">
            <StatusSelector
              enquiryId={enquiry.id}
              currentStatus={enquiry.status}
              onUpdate={onStatusUpdate}
            />
            <span className="text-xs text-slate-400 font-mono tabular-nums">
              {timeAgo(enquiry.created_at)}
            </span>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              Contact Information
            </p>
            <div className="space-y-2.5">
              {enquiry.company && (
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="font-medium">{enquiry.company}</span>
                </div>
              )}
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href={`mailto:${enquiry.email}`}
                  className="text-brand-blue-600 hover:underline font-mono text-xs break-all"
                >
                  {enquiry.email}
                </a>
              </div>
              {enquiry.phone ? (
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <a
                    href={`tel:${enquiry.phone}`}
                    className="font-mono text-xs hover:underline text-slate-700"
                  >
                    {enquiry.phone}
                  </a>
                </div>
              ) : (
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="text-xs italic">No phone provided</span>
                </div>
              )}
            </div>
          </div>

          {/* Service / Industry / Project Type */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-1.5 text-slate-400 mb-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                <span className="text-[10px] font-semibold uppercase tracking-wider">
                  Service
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-800 leading-snug">
                {enquiry.service}
              </p>
            </div>

            {enquiry.industry && (
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-slate-400 mb-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider">
                    Industry
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-800 leading-snug">
                  {enquiry.industry}
                </p>
              </div>
            )}

            {enquiry.project_type && (
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 col-span-2">
                <div className="flex items-center gap-1.5 text-slate-400 mb-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider">
                    Project Type
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-800 leading-snug">
                  {enquiry.project_type}
                </p>
              </div>
            )}
          </div>

          {/* Message */}
          <div>
            <div className="flex items-center gap-1.5 text-slate-400 mb-2">
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="text-[10px] font-semibold uppercase tracking-wider">
                Message
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                {enquiry.message}
              </p>
            </div>
          </div>

          {/* Metadata */}
          <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-mono">
            <div className="flex justify-between text-slate-400">
              <span>Enquiry ID</span>
              <span className="text-slate-600 break-all text-right max-w-[60%]">
                {enquiry.id}
              </span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Submitted
              </span>
              <span className="text-slate-600">{formatDate(enquiry.created_at)}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Last Updated</span>
              <span className="text-slate-600">{formatDate(enquiry.updated_at)}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Source</span>
              <span className="text-slate-600">{enquiry.source}</span>
            </div>
          </div>
        </div>

        {/* Footer action */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
          <a
            id="drawer-reply-email"
            href={`mailto:${enquiry.email}?subject=Re: ${encodeURIComponent(enquiry.service)} Enquiry — DORA Global Research`}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-sm font-semibold transition-colors"
          >
            <Mail className="w-4 h-4" />
            Reply via Email
          </a>
        </div>
      </aside>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Stat Card
// ─────────────────────────────────────────────────────────────────────────────

function StatCard({
  icon,
  label,
  value,
  active,
  onClick,
  id,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  active: boolean;
  onClick: () => void;
  id: string;
}) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`group text-left p-5 rounded-xl border transition-all duration-150 ${
        active
          ? "bg-brand-navy-900 border-brand-navy-700 text-white shadow-card"
          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:shadow-subtle"
      }`}
    >
      <div
        className={`mb-3 transition-colors ${
          active
            ? "text-brand-blue-300"
            : "text-slate-400 group-hover:text-brand-blue-600"
        }`}
      >
        {icon}
      </div>
      <div
        className={`text-3xl font-bold tracking-tight tabular-nums ${
          active ? "text-white" : "text-slate-900"
        }`}
      >
        {value}
      </div>
      <div
        className={`text-xs font-semibold uppercase tracking-wider mt-1 ${
          active ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {label}
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Admin Dashboard
// ─────────────────────────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const router = useRouter();
  const { toasts, addToast, dismissToast } = useToast();

  // Data
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [filterStatus, setFilterStatus] = useState<EnquiryStatus | "">("");
  const [filterService, setFilterService] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Drawer
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

  // Logout
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setCurrentPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch
  const fetchData = useCallback(
    async (showSpinner = false) => {
      if (showSpinner) {
        setIsRefreshing(true);
      } else if (!data) {
        setIsLoading(true);
      }
      setError(null);

      const params = new URLSearchParams({
        page: String(currentPage),
        pageSize: String(PAGE_SIZE),
      });
      if (filterStatus) params.set("status", filterStatus);
      if (filterService) params.set("service", filterService);
      if (debouncedSearch) params.set("search", debouncedSearch);

      try {
        const res = await fetch(`/api/admin/enquiries?${params}`);
        if (res.status === 401) {
          router.push("/admin/login");
          return;
        }
        if (!res.ok) throw new Error("Failed to load enquiries.");
        const result: DashboardData = await res.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unable to load enquiries.");
      } finally {
        setIsLoading(false);
        setIsRefreshing(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentPage, filterStatus, filterService, debouncedSearch, router]
  );

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, filterStatus, filterService, debouncedSearch]);

  // Optimistic status update + toast
  const handleStatusUpdate = useCallback(
    (id: string, status: EnquiryStatus, success: boolean) => {
      if (success) {
        setData((prev) => {
          if (!prev) return prev;
          const updated = prev.data.map((e) =>
            e.id === id ? { ...e, status, updated_at: new Date().toISOString() } : e
          );
          return { ...prev, data: updated, stats: recomputeStats(updated) };
        });
        setSelectedEnquiry((prev) =>
          prev?.id === id
            ? { ...prev, status, updated_at: new Date().toISOString() }
            : prev
        );
        addToast(
          `Status updated to "${STATUS_CONFIG[status].label}"`,
          "success"
        );
      } else {
        addToast("Failed to update status. Please try again.", "error");
      }
    },
    [addToast]
  );

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await fetch("/api/admin/auth", { method: "DELETE" }).catch(() => {});
    router.push("/admin/login");
  };

  const clearFilters = () => {
    setSearchQuery("");
    setFilterStatus("");
    setFilterService("");
    setCurrentPage(1);
  };

  const hasActiveFilters = filterStatus || filterService || debouncedSearch;
  const totalPages = data ? Math.ceil(data.total / PAGE_SIZE) : 1;

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50">
      {/* ── Topbar ── */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-navy-900 rounded-lg flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-semibold text-sm text-slate-900 tracking-tight">
                  DORA Admin
                </span>
                <p className="hidden sm:block text-[10px] text-slate-400 font-mono uppercase tracking-wider -mt-0.5">
                  Enquiry Management System
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                id="admin-refresh"
                onClick={() => fetchData(true)}
                disabled={isRefreshing}
                title="Refresh data"
                aria-label="Refresh data"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors disabled:opacity-50"
              >
                <RefreshCw
                  className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`}
                />
              </button>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <Globe className="w-3 h-3" />
                View Site
              </a>
              <button
                id="admin-logout"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-red-600 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-red-200 hover:bg-red-50 transition-colors disabled:opacity-50"
              >
                {isLoggingOut ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <LogOut className="w-3 h-3" />
                )}
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Page Title */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
              Enquiries
            </h1>
            <p className="text-sm text-slate-500 mt-0.5">
              Review and manage all inbound project enquiries.
            </p>
          </div>
          {data?.stats.new ? (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              {data.stats.new} new
            </div>
          ) : null}
        </div>

        {/* Error Banner */}
        {error && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold text-sm">Failed to load enquiries</p>
              <p className="text-sm opacity-80 mt-0.5">{error}</p>
            </div>
            <button
              onClick={() => fetchData()}
              className="text-xs font-semibold underline hover:no-underline shrink-0"
            >
              Retry
            </button>
          </div>
        )}

        {/* Stats Cards */}
        {isLoading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-28 rounded-xl bg-white border border-slate-200 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              id="stat-total"
              icon={<Inbox className="w-5 h-5" />}
              label="Total Enquiries"
              value={data?.stats.total ?? 0}
              active={filterStatus === "" && !filterService}
              onClick={clearFilters}
            />
            <StatCard
              id="stat-new"
              icon={<Mail className="w-5 h-5" />}
              label="New"
              value={data?.stats.new ?? 0}
              active={filterStatus === "new"}
              onClick={() => {
                setFilterStatus("new");
                setFilterService("");
                setCurrentPage(1);
              }}
            />
            <StatCard
              id="stat-in-progress"
              icon={<Clock className="w-5 h-5" />}
              label="In Progress"
              value={data?.stats.in_progress ?? 0}
              active={filterStatus === "in_progress"}
              onClick={() => {
                setFilterStatus("in_progress");
                setFilterService("");
                setCurrentPage(1);
              }}
            />
            <StatCard
              id="stat-closed"
              icon={<CheckCircle2 className="w-5 h-5" />}
              label="Closed"
              value={data?.stats.closed ?? 0}
              active={filterStatus === "closed"}
              onClick={() => {
                setFilterStatus("closed");
                setFilterService("");
                setCurrentPage(1);
              }}
            />
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              id="admin-search"
              type="text"
              placeholder="Search by name, email, or company…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search query"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <select
              id="filter-status"
              value={filterStatus}
              onChange={(e) => {
                setFilterStatus(e.target.value as EnquiryStatus | "");
                setCurrentPage(1);
              }}
              className="pl-9 pr-8 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 appearance-none cursor-pointer"
            >
              <option value="">All Statuses</option>
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {STATUS_CONFIG[s].label}
                </option>
              ))}
            </select>
          </div>

          {/* Service Filter */}
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <select
              id="filter-service"
              value={filterService}
              onChange={(e) => {
                setFilterService(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-9 pr-8 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 appearance-none cursor-pointer"
            >
              <option value="">All Services</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Clear filters button */}
          {hasActiveFilters && (
            <button
              id="clear-filters"
              onClick={clearFilters}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 px-3 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white transition-colors whitespace-nowrap"
            >
              <X className="w-3.5 h-3.5" />
              Clear
            </button>
          )}
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-subtle overflow-hidden">
          {isLoading ? (
            /* Loading state */
            <div className="p-16 flex flex-col items-center justify-center gap-3">
              <Loader2 className="w-8 h-8 text-brand-blue-500 animate-spin" />
              <p className="text-sm text-slate-500">Loading enquiries…</p>
            </div>
          ) : !data?.data.length ? (
            /* Empty state */
            <div className="py-20 text-center">
              <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                <Inbox className="w-7 h-7 text-slate-400" />
              </div>
              <p className="font-semibold text-slate-600 text-sm">
                {hasActiveFilters ? "No matching enquiries" : "No enquiries yet"}
              </p>
              <p className="text-xs text-slate-400 mt-1.5 max-w-xs mx-auto">
                {hasActiveFilters
                  ? "Try adjusting or clearing your filters."
                  : "Enquiries submitted via the public contact form will appear here."}
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="mt-5 text-xs font-semibold text-brand-blue-600 hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="text-left px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500 w-56">
                        Name
                      </th>
                      <th className="text-left px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500 hidden lg:table-cell">
                        Company
                      </th>
                      <th className="text-left px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Service
                      </th>
                      <th className="text-left px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500 hidden xl:table-cell">
                        Industry
                      </th>
                      <th className="text-left px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Status
                      </th>
                      <th className="text-left px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500 hidden lg:table-cell">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.data.map((enquiry) => (
                      <tr
                        key={enquiry.id}
                        onClick={() => setSelectedEnquiry(enquiry)}
                        className="hover:bg-slate-50 cursor-pointer transition-colors group"
                      >
                        <td className="px-5 py-4">
                          <p className="font-semibold text-slate-900 text-sm group-hover:text-brand-blue-600 transition-colors truncate max-w-[200px]">
                            {enquiry.name}
                          </p>
                          <p className="text-xs text-slate-400 font-mono truncate max-w-[200px] mt-0.5">
                            {enquiry.email}
                          </p>
                        </td>
                        <td className="px-4 py-4 hidden lg:table-cell">
                          <span className="text-sm text-slate-600 truncate block max-w-[160px]">
                            {enquiry.company || (
                              <span className="text-slate-300 italic text-xs">—</span>
                            )}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <span className="text-xs font-medium text-slate-700">
                            {enquiry.service}
                          </span>
                        </td>
                        <td className="px-4 py-4 hidden xl:table-cell">
                          <span className="text-xs text-slate-500">
                            {enquiry.industry || "—"}
                          </span>
                        </td>
                        <td
                          className="px-4 py-4"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <StatusSelector
                            enquiryId={enquiry.id}
                            currentStatus={enquiry.status}
                            onUpdate={handleStatusUpdate}
                          />
                        </td>
                        <td className="px-4 py-4 hidden lg:table-cell">
                          <span className="text-xs text-slate-400 tabular-nums">
                            {timeAgo(enquiry.created_at)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile card list */}
              <div className="md:hidden divide-y divide-slate-100">
                {data.data.map((enquiry) => (
                  <div
                    key={enquiry.id}
                    onClick={() => setSelectedEnquiry(enquiry)}
                    className="p-4 cursor-pointer hover:bg-slate-50 active:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-slate-900 truncate">
                          {enquiry.name}
                        </p>
                        {enquiry.company && (
                          <p className="text-xs text-slate-400 truncate mt-0.5">
                            {enquiry.company}
                          </p>
                        )}
                      </div>
                      <StatusBadge status={enquiry.status} />
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
                      <span className="font-medium">{enquiry.service}</span>
                      <span className="text-slate-400">{timeAgo(enquiry.created_at)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Pagination */}
          {!isLoading && data && data.total > PAGE_SIZE && (
            <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-100 bg-slate-50">
              <p className="text-xs text-slate-500 tabular-nums">
                Showing{" "}
                <span className="font-semibold text-slate-700">
                  {(currentPage - 1) * PAGE_SIZE + 1}–
                  {Math.min(currentPage * PAGE_SIZE, data.total)}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-slate-700">
                  {data.total}
                </span>
              </p>
              <div className="flex items-center gap-1.5">
                <button
                  id="page-prev"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage <= 1}
                  aria-label="Previous page"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-200 transition-colors disabled:opacity-30 disabled:cursor-default"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-semibold text-slate-600 tabular-nums px-1 min-w-[48px] text-center">
                  {currentPage} / {totalPages}
                </span>
                <button
                  id="page-next"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage >= totalPages}
                  aria-label="Next page"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-200 transition-colors disabled:opacity-30 disabled:cursor-default"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Detail Drawer */}
      <EnquiryDrawer
        enquiry={selectedEnquiry}
        onClose={() => setSelectedEnquiry(null)}
        onStatusUpdate={handleStatusUpdate}
      />

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Local stat recompute (for optimistic updates)
// ─────────────────────────────────────────────────────────────────────────────

function recomputeStats(enquiries: Enquiry[]): { total: number; new: number; contacted: number; in_progress: number; closed: number } {
  const stats = { total: enquiries.length, new: 0, contacted: 0, in_progress: 0, closed: 0 };
  for (const e of enquiries) {
    if (e.status in stats) (stats as Record<string, number>)[e.status]++;
  }
  return stats;
}
