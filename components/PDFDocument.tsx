import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { CertificateData } from '../types';
import { calculateError, calculatePercentageError, calculateAverageError } from '../utils/calculations';

// Calculate today's date for 'Date of Issue' or use default
const formatDate = (date: string) => date ? new Date(date).toLocaleDateString('en-GB') : '-';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 30,
        fontFamily: 'Helvetica',
        fontSize: 10,
        lineHeight: 1.2,
    },
    borderBox: {
        border: '1px solid #000',
        height: '100%',
        padding: 2,
        flexDirection: 'column',
    },
    innerBorderBox: {
        border: '1px solid #000',
        height: '100%',
        flexDirection: 'column',
    },
    header: {
        padding: 10,
        borderBottom: '1px solid #000',
        alignItems: 'center',
        marginBottom: 5,
    },
    isoBox: {
        position: 'absolute',
        top: 5,
        left: 5,
        border: '1px solid #000',
        padding: 2,
        fontSize: 8,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 18,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 2,
    },
    subTitle: {
        fontSize: 8,
        marginBottom: 1,
    },
    certTitle: {
        fontSize: 14,
        fontFamily: 'Helvetica-Bold',
        marginTop: 5,
        textDecoration: 'underline',
    },
    section: {
        margin: 5,
        marginBottom: 8,
    },
    sectionHeader: {
        fontSize: 9,
        fontFamily: 'Helvetica-Bold',
        textDecoration: 'underline',
        marginBottom: 2,
        textTransform: 'uppercase',
    },
    gridBox: {
        border: '1px solid #000',
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        borderBottom: '1px solid #000',
    },
    lastRow: {
        borderBottom: 'none',
    },
    cellLabel: {
        width: '35%',
        borderRight: '1px solid #000',
        padding: 4,
        backgroundColor: '#f9fafb',
        fontFamily: 'Helvetica-Bold',
        fontSize: 9,
    },
    cellValue: {
        width: '65%',
        padding: 4,
        fontSize: 9,
    },
    row50: {
        width: '50%',
        flexDirection: 'row',
        borderRight: '1px solid #000',
    },
    lastRow50: {
        width: '50%',
        flexDirection: 'row',
    },
    rowLabel50: {
        width: '40%',
        borderRight: '1px solid #000',
        padding: 2,
        paddingLeft: 4,
        backgroundColor: '#f9fafb',
        fontFamily: 'Helvetica-Bold',
        fontSize: 9,
    },
    rowValue50: {
        width: '60%',
        padding: 2,
        paddingLeft: 4,
        fontSize: 9,
    },
    table: {
        width: '100%',
        border: '1px solid #000',
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f3f4f6',
        borderBottom: '1px solid #000',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottom: '1px solid #000',
    },
    tableCell: {
        padding: 3,
        fontSize: 8,
        borderRight: '1px solid #000',
        textAlign: 'center',
    },
    lastTableCell: {
        padding: 3,
        fontSize: 8,
        textAlign: 'center',
        borderRight: 'none',
    },
    footer: {
        marginTop: 'auto',
        borderTop: '1px solid #000',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    signatureBox: {
        width: '30%',
        alignItems: 'center',
    },
    signatureLine: {
        borderTop: '1px solid #000',
        width: '100%',
        textAlign: 'center',
        paddingTop: 2,
        fontSize: 8,
        fontFamily: 'Helvetica-Bold',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 8,
        bottom: 5,
        right: 20,
        textAlign: 'right',
    },
    remarks: {
        border: '1px solid #000',
        padding: 5,
        marginTop: 10,
        fontSize: 8,
    },
});

interface Props {
    data: CertificateData;
}

const PageLayout = ({ children, data, pageNum }: { children: React.ReactNode, data: CertificateData, pageNum: number }) => (
    <Page size="A4" style={styles.page}>
        <View style={styles.borderBox}>
            <View style={styles.innerBorderBox}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.isoBox}>ISO/IEC 17025:2017</Text>
                    <Text style={styles.title}>ANC CALIBRATION LAB</Text>
                    <Text style={styles.subTitle}>Plot No. 123, Industrial Estate, Chennai - 600001</Text>
                    <Text style={styles.subTitle}>Email: support@anccalibration.com</Text>
                    <Text style={styles.certTitle}>Calibration Certificate</Text>
                </View>

                {/* Content */}
                <View style={{ flex: 1, padding: 10 }}>
                    {children}
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <View style={styles.signatureBox}>
                        <Text style={{ fontFamily: 'Helvetica-Oblique', fontSize: 12, marginBottom: 2 }}>{data.calibratedBy.split(' ')[0]}</Text>
                        <Text style={styles.signatureLine}>Calibrated By</Text>
                    </View>
                    <View style={styles.signatureBox}>
                        <Text style={{ fontFamily: 'Helvetica-Oblique', fontSize: 12, marginBottom: 2 }}>{data.approvedBy.split(' ')[0]}</Text>
                        <Text style={styles.signatureLine}>Authorized Signatory</Text>
                    </View>
                </View>

                <Text style={styles.pageNumber}>Format No: ANC/F/01 | Page {pageNum} of 4</Text>
            </View>
        </View>
    </Page>
);

const PDFDocument: React.FC<Props> = ({ data }) => (
    <Document>
        {/* Page 1 */}
        <PageLayout data={data} pageNum={1}>
            {/* Meta Data */}
            <View style={styles.section}>
                <View style={styles.gridBox}>
                    <View style={styles.row}>
                        <View style={styles.row50}>
                            <Text style={styles.rowLabel50}>Certificate No</Text>
                            <Text style={styles.rowValue50}>{data.certificateNumber}</Text>
                        </View>
                        <View style={styles.lastRow50}>
                            <Text style={styles.rowLabel50}>Issue Date</Text>
                            <Text style={styles.rowValue50}>{formatDate(data.issueDate)}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.row50}>
                            <Text style={styles.rowLabel50}>SRF No</Text>
                            <Text style={styles.rowValue50}>{data.srfNo}</Text>
                        </View>
                        <View style={styles.lastRow50}>
                            <Text style={styles.rowLabel50}>SRF Date</Text>
                            <Text style={styles.rowValue50}>{formatDate(data.srfDate)}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.row50}>
                            <Text style={styles.rowLabel50}>Date of Calib</Text>
                            <Text style={styles.rowValue50}>{formatDate(data.dateOfCalib)}</Text>
                        </View>
                        <View style={styles.lastRow50}>
                            <Text style={styles.rowLabel50}>Next Due</Text>
                            <Text style={styles.rowValue50}>{formatDate(data.nextCalibDate)}</Text>
                        </View>
                    </View>
                    <View style={styles.lastRow}>
                        <Text style={[styles.cellLabel, { width: '20%' }]}>Discipline</Text>
                        <Text style={[styles.cellValue, { width: '80%' }]}>{data.discipline}</Text>
                    </View>
                </View>
            </View>

            {/* Customer Details */}
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>1. Customer Details</Text>
                <View style={styles.gridBox}>
                    <View style={styles.row}>
                        <Text style={styles.cellLabel}>Name</Text>
                        <Text style={styles.cellValue}>{data.customer.name}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.cellLabel}>Address</Text>
                        <Text style={styles.cellValue}>{data.customer.address}</Text>
                    </View>
                    <View style={styles.lastRow}>
                        <Text style={styles.cellLabel}>Location</Text>
                        <Text style={styles.cellValue}>{data.calibratedAt}</Text>
                    </View>
                </View>
            </View>

            {/* UUC Details */}
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>2. Details of Unit Under Calibration (UUC)</Text>
                <View style={styles.gridBox}>
                    <View style={styles.row}>
                        <View style={styles.row50}>
                            <Text style={styles.rowLabel50}>Description</Text>
                            <Text style={styles.rowValue50}>{data.instrument.description}</Text>
                        </View>
                        <View style={styles.lastRow50}>
                            <Text style={styles.rowLabel50}>Make</Text>
                            <Text style={styles.rowValue50}>{data.instrument.make}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.row50}>
                            <Text style={styles.rowLabel50}>Model</Text>
                            <Text style={styles.rowValue50}>{data.instrument.model}</Text>
                        </View>
                        <View style={styles.lastRow50}>
                            <Text style={styles.rowLabel50}>Serial No</Text>
                            <Text style={styles.rowValue50}>{data.instrument.serialNo}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.row50}>
                            <Text style={styles.rowLabel50}>Capacity</Text>
                            <Text style={styles.rowValue50}>{data.instrument.capacity}</Text>
                        </View>
                        <View style={styles.lastRow50}>
                            <Text style={styles.rowLabel50}>Resolution</Text>
                            <Text style={styles.rowValue50}>{data.instrument.resolution}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.row50}>
                            <Text style={styles.rowLabel50}>Accuracy Class</Text>
                            <Text style={styles.rowValue50}>{data.instrument.accuracyClass}</Text>
                        </View>
                        <View style={styles.lastRow50}>
                            <Text style={styles.rowLabel50}>Location</Text>
                            <Text style={styles.rowValue50}>{data.instrument.location}</Text>
                        </View>
                    </View>
                    <View style={styles.lastRow}>
                        <Text style={styles.cellLabel}>Condition</Text>
                        <Text style={styles.cellValue}>{data.conditionReceipt}</Text>
                    </View>
                </View>
            </View>

            {/* Environment */}
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>3. Environmental Conditions</Text>
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={[styles.tableCell, { flex: 1 }]}>Temperature (°C)</Text>
                        <Text style={[styles.tableCell, { flex: 1 }]}>Relative Humidity (%)</Text>
                        <Text style={[styles.lastTableCell, { flex: 1 }]}>Pressure</Text>
                    </View>
                    <View style={[styles.tableRow, { borderBottom: 'none' }]}>
                        <Text style={[styles.tableCell, { flex: 1 }]}>{data.environment.temperature}</Text>
                        <Text style={[styles.tableCell, { flex: 1 }]}>{data.environment.humidity}</Text>
                        <Text style={[styles.lastTableCell, { flex: 1 }]}>{data.environment.pressure}</Text>
                    </View>
                </View>
            </View>

            {/* Standards */}
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>4. Standards Used for Traceability</Text>
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={[styles.tableCell, { width: '10%' }]}>S.No</Text>
                        <Text style={[styles.tableCell, { width: '45%' }]}>Standard Equipment</Text>
                        <Text style={[styles.lastTableCell, { width: '45%' }]}>Traceability Certificate Details</Text>
                    </View>
                    {data.masterEquipments.map((eq, i) => (
                        <View key={eq.id} style={[styles.tableRow, i === data.masterEquipments.length - 1 ? { borderBottom: 'none' } : {}]}>
                            <Text style={[styles.tableCell, { width: '10%' }]}>{i + 1}</Text>
                            <Text style={[styles.tableCell, { width: '45%', textAlign: 'left' }]}>{eq.description}</Text>
                            <Text style={[styles.lastTableCell, { width: '45%', textAlign: 'left' }]}>{eq.traceability}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </PageLayout>

        {/* Page 2 */}
        <PageLayout data={data} pageNum={2}>
            <Text style={{ textAlign: 'center', fontFamily: 'Helvetica-Bold', fontSize: 12, textDecoration: 'underline', marginBottom: 15 }}>CALIBRATION RESULTS</Text>

            {/* Repeatability */}
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>A. Repeatability Test</Text>
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={[styles.tableCell, { width: '10%' }]}>S.No</Text>
                        <Text style={[styles.tableCell, { width: '22%' }]}>HL Load</Text>
                        <Text style={[styles.tableCell, { width: '23%' }]}>HL Reading</Text>
                        <Text style={[styles.tableCell, { width: '22%' }]}>FL Load</Text>
                        <Text style={[styles.lastTableCell, { width: '23%' }]}>FL Reading</Text>
                    </View>
                    {data.repeatability.map((row, i) => (
                        <View key={i} style={[styles.tableRow, i === data.repeatability.length - 1 ? { borderBottom: 'none' } : {}]}>
                            <Text style={[styles.tableCell, { width: '10%' }]}>{i + 1}</Text>
                            <Text style={[styles.tableCell, { width: '22%' }]}>{row.halfLoad || "-"}</Text>
                            <Text style={[styles.tableCell, { width: '23%' }]}>{row.ducHalf}</Text>
                            <Text style={[styles.tableCell, { width: '22%' }]}>{row.fullLoad || "-"}</Text>
                            <Text style={[styles.lastTableCell, { width: '23%' }]}>{row.ducFull}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Eccentricity */}
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>B. Eccentricity Test</Text>
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={[styles.tableCell, { width: '30%' }]}>Position</Text>
                        <Text style={[styles.tableCell, { width: '35%' }]}>Standard Load</Text>
                        <Text style={[styles.lastTableCell, { width: '35%' }]}>Observed Reading</Text>
                    </View>
                    {data.eccentricity.map((row, i) => (
                        <View key={i} style={[styles.tableRow, i === data.eccentricity.length - 1 ? { borderBottom: 'none' } : {}]}>
                            <Text style={[styles.tableCell, { width: '30%' }]}>{row.position}</Text>
                            <Text style={[styles.tableCell, { width: '35%' }]}>{row.nominal}</Text>
                            <Text style={[styles.lastTableCell, { width: '35%' }]}>{row.reading}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </PageLayout>

        {/* Page 3 */}
        <PageLayout data={data} pageNum={3}>
            <Text style={{ textAlign: 'center', fontFamily: 'Helvetica-Bold', fontSize: 12, textDecoration: 'underline', marginBottom: 15 }}>CALIBRATION RESULTS (Contd.)</Text>

            {/* Weighing Performance */}
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>C. Weighing Performance Test</Text>
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={[styles.tableCell, { width: '25%' }]}>Standard Mass</Text>
                        <Text style={[styles.tableCell, { width: '25%' }]}>UUC Reading</Text>
                        <Text style={[styles.tableCell, { width: '25%' }]}>Error</Text>
                        <Text style={[styles.lastTableCell, { width: '25%' }]}>Exp. Uncertainty (k=2)</Text>
                    </View>
                    {data.weighingPerformance.map((row, i) => (
                        <View key={i} style={[styles.tableRow, i === data.weighingPerformance.length - 1 ? { borderBottom: 'none' } : {}]}>
                            <Text style={[styles.tableCell, { width: '25%' }]}>{row.certified}</Text>
                            <Text style={[styles.tableCell, { width: '25%' }]}>{row.reading}</Text>
                            <Text style={[styles.tableCell, { width: '25%' }]}>{calculateError(row.reading, row.certified)}</Text>
                            {i === 0 && (
                                <Text style={[styles.lastTableCell, { width: '25%' }]}>{data.uncertainty}</Text>
                            )}
                            {i !== 0 && (
                                <Text style={[styles.lastTableCell, { width: '25%' }]}></Text>
                            )}
                        </View>
                    ))}
                </View>
            </View>

            {/* Remarks */}
            <View style={styles.remarks}>
                <Text style={{ fontFamily: 'Helvetica-Bold', textDecoration: 'underline', marginBottom: 2 }}>Remarks:</Text>
                <Text>1. The reported expanded uncertainty is based on a standard uncertainty multiplied by a coverage factor k=2, providing a level of confidence of approximately 95.45%.</Text>
                <Text>2. The results reported in this certificate are valid at the time of and under the stated conditions of measurement.</Text>
                <Text>3. This certificate shall not be reproduced except in full, without the written approval of the laboratory.</Text>
                <Text>4. Calibration Method: {data.methodology}</Text>
                <Text>5. Measurements are traceable to National/International standards.</Text>
            </View>

            <Text style={{ textAlign: 'center', fontFamily: 'Helvetica-Bold', fontSize: 10, marginTop: 15 }}>*** END OF CERTIFICATE ***</Text>
        </PageLayout>

        {/* Page 4 - Annexure */}
        <PageLayout data={data} pageNum={4}>
            <View style={styles.section}>
                <Text style={{ textAlign: 'center', fontFamily: 'Helvetica-Bold', fontSize: 14, textDecoration: 'underline', marginBottom: 10 }}>ANNEXURE REPORT</Text>
                <Text style={{ textAlign: 'center', fontSize: 8, marginBottom: 15, textTransform: 'uppercase' }}>(Supplementary Data Sheet)</Text>

                {/* Info Block */}
                <View style={[styles.gridBox, { marginBottom: 15 }]}>
                    <View style={styles.row}>
                        <Text style={[styles.cellLabel, { width: '25%' }]}>Cert No</Text>
                        <Text style={[styles.cellValue, { width: '75%' }]}>{data.certificateNumber}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={[styles.cellLabel, { width: '25%' }]}>Customer</Text>
                        <Text style={[styles.cellValue, { width: '75%' }]}>{data.customer.name}</Text>
                    </View>
                    <View style={styles.lastRow}>
                        <Text style={[styles.cellLabel, { width: '25%' }]}>Instrument</Text>
                        <Text style={[styles.cellValue, { width: '75%' }]}>{data.instrument.description} (Make: {data.instrument.make}, Model: {data.instrument.model})</Text>
                    </View>
                </View>

                <Text style={{ textAlign: 'center', fontFamily: 'Helvetica-Bold', fontSize: 10, textDecoration: 'underline', marginBottom: 8 }}>LINEARITY & HYSTERESIS DATA</Text>

                {/* Annexure Table */}
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <Text style={[styles.tableCell, { width: '14%' }]}>Load</Text>
                        <Text style={[styles.tableCell, { width: '17%' }]}>Loading Indication</Text>
                        <Text style={[styles.tableCell, { width: '17%' }]}>Unloading Indication</Text>
                        <Text style={[styles.tableCell, { width: '17%' }]}>Loading Error %</Text>
                        <Text style={[styles.tableCell, { width: '17%' }]}>Unloading Error %</Text>
                        <Text style={[styles.lastTableCell, { width: '18%' }]}>Avg Error %</Text>
                    </View>
                    {data.annexureRows.map((row, i) => {
                        const lErr = calculatePercentageError(row.loading, row.deadWeight);
                        const uErr = calculatePercentageError(row.unloading, row.deadWeight);
                        const avg = calculateAverageError(lErr, uErr);
                        return (
                            <View key={row.id} style={[styles.tableRow, i === data.annexureRows.length - 1 ? { borderBottom: 'none' } : {}]}>
                                <Text style={[styles.tableCell, { width: '14%', fontFamily: 'Helvetica-Bold' }]}>{row.deadWeight}</Text>
                                <Text style={[styles.tableCell, { width: '17%' }]}>{row.loading}</Text>
                                <Text style={[styles.tableCell, { width: '17%' }]}>{row.unloading}</Text>
                                <Text style={[styles.tableCell, { width: '17%', fontSize: 7 }]}>{lErr}</Text>
                                <Text style={[styles.tableCell, { width: '17%', fontSize: 7 }]}>{uErr}</Text>
                                <Text style={[styles.lastTableCell, { width: '18%', fontFamily: 'Helvetica-Bold' }]}>{avg}</Text>
                            </View>
                        );
                    })}
                </View>
                <View style={{ marginTop: 5, padding: 3, border: '1px solid #000', borderTop: 'none' }}>
                    <Text style={{ textAlign: 'right', fontFamily: 'Helvetica-Bold', fontSize: 7, paddingRight: 8 }}>
                        Combined Variance (Average): {data.combinedVariance}
                    </Text>
                </View>

                {/* Conclusion Block */}
                <View style={[styles.remarks, { marginTop: 15 }]}>
                    <View style={{ marginBottom: 5 }}>
                        <Text style={{ fontFamily: 'Helvetica-Bold', textDecoration: 'underline' }}>Traceability Reference: </Text>
                        <Text>{data.masterEquipments[0]?.description} ({data.masterEquipments[0]?.traceability})</Text>
                    </View>
                    <View>
                        <Text style={{ fontFamily: 'Helvetica-Bold', textDecoration: 'underline' }}>Conclusion: </Text>
                        <Text>The instrument performance is within the acceptable error limit of {data.acceptableError}.</Text>
                    </View>
                </View>
            </View>
        </PageLayout>
    </Document>
);

export default PDFDocument;
