
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-08 05:00:00", "b": 2068.8}, {"a": "2025-01-08 05:05:00", "b": 2010.2}, {"a": "2025-01-08 05:10:00", "b": 1279.6}, {"a": "2025-01-08 05:15:00", "b": 1846.4}, {"a": "2025-01-08 05:20:00", "b": 2199.0}, {"a": "2025-01-08 05:25:00", "b": 3498.6}, {"a": "2025-01-08 05:30:00", "b": 832.8}, {"a": "2025-01-08 05:35:00", "b": 642.2}, {"a": "2025-01-08 05:40:00", "b": 575.2}, {"a": "2025-01-08 05:45:00", "b": 715.4}, {"a": "2025-01-08 05:50:00", "b": 754.2}, {"a": "2025-01-08 05:55:00", "b": 705.4}, {"a": "2025-01-08 06:00:00", "b": 760.6}, {"a": "2025-01-08 06:05:00", "b": 708.6}, {"a": "2025-01-08 06:10:00", "b": 702.6}, {"a": "2025-01-08 06:15:00", "b": 685.0}, {"a": "2025-01-08 06:20:00", "b": 620.6}, {"a": "2025-01-08 06:25:00", "b": 677.4}, {"a": "2025-01-08 06:30:00", "b": 653.6}, {"a": "2025-01-08 06:35:00", "b": 649.0}, {"a": "2025-01-08 06:40:00", "b": 637.8}, {"a": "2025-01-08 06:45:00", "b": 620.2}, {"a": "2025-01-08 06:50:00", "b": 590.4}, {"a": "2025-01-08 06:55:00", "b": 607.0}, {"a": "2025-01-08 07:00:00", "b": 571.2}, {"a": "2025-01-08 07:05:00", "b": 582.2}, {"a": "2025-01-08 07:10:00", "b": 631.2}, {"a": "2025-01-08 07:15:00", "b": 598.8}, {"a": "2025-01-08 07:20:00", "b": 828.2}, {"a": "2025-01-08 07:25:00", "b": 1429.4}, {"a": "2025-01-08 07:30:00", "b": 819.8}, {"a": "2025-01-08 07:35:00", "b": 1443.0}, {"a": "2025-01-08 07:40:00", "b": 1971.4}, {"a": "2025-01-08 07:45:00", "b": 1255.2}, {"a": "2025-01-08 07:50:00", "b": 606.8}, {"a": "2025-01-08 07:55:00", "b": 570.2}, {"a": "2025-01-08 08:00:00", "b": 589.8}, {"a": "2025-01-08 08:05:00", "b": 598.25}, {"a": "2025-01-08 08:10:00", "b": 577.2}, {"a": "2025-01-08 08:15:00", "b": 564.4}, {"a": "2025-01-08 08:20:00", "b": 554.0}, {"a": "2025-01-08 08:25:00", "b": 581.6}, {"a": "2025-01-08 08:30:00", "b": 570.8}, {"a": "2025-01-08 08:35:00", "b": 540.6}, {"a": "2025-01-08 08:40:00", "b": 581.4}, {"a": "2025-01-08 08:45:00", "b": 559.4}, {"a": "2025-01-08 08:50:00", "b": 567.5}, {"a": "2025-01-08 08:55:00", "b": 585.0}, {"a": "2025-01-08 09:00:00", "b": 542.0}, {"a": "2025-01-08 09:05:00", "b": 526.2}, {"a": "2025-01-08 09:10:00", "b": 527.8}, {"a": "2025-01-08 09:15:00", "b": 548.2}, {"a": "2025-01-08 09:20:00", "b": 567.0}, {"a": "2025-01-08 09:25:00", "b": 594.6}, {"a": "2025-01-08 09:30:00", "b": 596.0}, {"a": "2025-01-08 09:35:00", "b": 601.6666666666666}, {"a": "2025-01-08 09:40:00", "b": 598.6}, {"a": "2025-01-08 09:45:00", "b": 593.2}, {"a": "2025-01-08 09:50:00", "b": 575.0}, {"a": "2025-01-08 09:55:00", "b": 550.4}, {"a": "2025-01-08 10:00:00", "b": 544.2}, {"a": "2025-01-08 10:05:00", "b": 536.6}, {"a": "2025-01-08 10:10:00", "b": 528.2}, {"a": "2025-01-08 10:15:00", "b": 527.3333333333334}, {"a": "2025-01-08 10:20:00", "b": 546.0}, {"a": "2025-01-08 10:25:00", "b": 1258.8}, {"a": "2025-01-08 10:30:00", "b": 1059.6}, {"a": "2025-01-08 10:35:00", "b": 1237.2}, {"a": "2025-01-08 10:40:00", "b": 835.8}, {"a": "2025-01-08 10:45:00", "b": 678.2}, {"a": "2025-01-08 10:50:00", "b": 1066.0}, {"a": "2025-01-08 10:55:00", "b": 938.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    