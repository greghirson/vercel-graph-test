
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-02-02 07:00:00", "b": 514.6666666666666}, {"a": "2025-02-02 07:05:00", "b": 513.2}, {"a": "2025-02-02 07:10:00", "b": 500.6}, {"a": "2025-02-02 07:15:00", "b": 508.0}, {"a": "2025-02-02 07:20:00", "b": 517.6666666666666}, {"a": "2025-02-02 07:25:00", "b": 511.2}, {"a": "2025-02-02 07:30:00", "b": 509.4}, {"a": "2025-02-02 07:35:00", "b": 507.6}, {"a": "2025-02-02 07:40:00", "b": 512.0}, {"a": "2025-02-02 07:45:00", "b": 510.6666666666667}, {"a": "2025-02-02 07:50:00", "b": 516.8}, {"a": "2025-02-02 07:55:00", "b": 517.4}, {"a": "2025-02-02 08:00:00", "b": 511.0}, {"a": "2025-02-02 08:05:00", "b": 502.75}, {"a": "2025-02-02 08:10:00", "b": 507.6}, {"a": "2025-02-02 08:15:00", "b": 508.0}, {"a": "2025-02-02 08:20:00", "b": 507.0}, {"a": "2025-02-02 08:25:00", "b": 539.4}, {"a": "2025-02-02 08:30:00", "b": 607.6}, {"a": "2025-02-02 08:35:00", "b": 649.6}, {"a": "2025-02-02 08:40:00", "b": 685.0}, {"a": "2025-02-02 08:45:00", "b": 714.75}, {"a": "2025-02-02 08:50:00", "b": 736.6}, {"a": "2025-02-02 08:55:00", "b": 728.0}, {"a": "2025-02-02 09:00:00", "b": 718.0}, {"a": "2025-02-02 09:05:00", "b": 726.0}, {"a": "2025-02-02 09:10:00", "b": 723.75}, {"a": "2025-02-02 09:15:00", "b": 700.6}, {"a": "2025-02-02 09:20:00", "b": 665.2}, {"a": "2025-02-02 09:25:00", "b": 670.6}, {"a": "2025-02-02 09:30:00", "b": 681.5}, {"a": "2025-02-02 09:35:00", "b": 680.4}, {"a": "2025-02-02 09:40:00", "b": 673.6}, {"a": "2025-02-02 09:45:00", "b": 688.8}, {"a": "2025-02-02 09:50:00", "b": 697.6}, {"a": "2025-02-02 09:55:00", "b": 692.75}, {"a": "2025-02-02 10:00:00", "b": 698.6666666666666}, {"a": "2025-02-02 10:05:00", "b": 680.75}, {"a": "2025-02-02 10:10:00", "b": 661.0}, {"a": "2025-02-02 10:15:00", "b": 650.2}, {"a": "2025-02-02 10:20:00", "b": 652.75}, {"a": "2025-02-02 10:25:00", "b": 657.0}, {"a": "2025-02-02 10:30:00", "b": 667.0}, {"a": "2025-02-02 10:35:00", "b": 650.75}, {"a": "2025-02-02 10:40:00", "b": 641.8}, {"a": "2025-02-02 10:45:00", "b": 667.2}, {"a": "2025-02-02 10:50:00", "b": 666.2}, {"a": "2025-02-02 10:55:00", "b": 642.3333333333334}, {"a": "2025-02-02 11:00:00", "b": 631.6}, {"a": "2025-02-02 11:05:00", "b": 641.8}, {"a": "2025-02-02 11:10:00", "b": 647.0}, {"a": "2025-02-02 11:15:00", "b": 648.2}, {"a": "2025-02-02 11:20:00", "b": 627.6}, {"a": "2025-02-02 11:25:00", "b": 614.75}, {"a": "2025-02-02 11:30:00", "b": 619.8}, {"a": "2025-02-02 11:35:00", "b": 610.2}, {"a": "2025-02-02 11:40:00", "b": 586.4}, {"a": "2025-02-02 11:45:00", "b": 587.75}, {"a": "2025-02-02 11:50:00", "b": 588.0}, {"a": "2025-02-02 11:55:00", "b": 586.5}, {"a": "2025-02-02 12:00:00", "b": 585.4}, {"a": "2025-02-02 12:05:00", "b": 577.5}, {"a": "2025-02-02 12:10:00", "b": 576.6}, {"a": "2025-02-02 12:15:00", "b": 571.0}, {"a": "2025-02-02 12:20:00", "b": 606.2}, {"a": "2025-02-02 12:25:00", "b": 615.25}, {"a": "2025-02-02 12:30:00", "b": 597.8}, {"a": "2025-02-02 12:35:00", "b": 583.25}, {"a": "2025-02-02 12:40:00", "b": 591.2}, {"a": "2025-02-02 12:45:00", "b": 599.0}, {"a": "2025-02-02 12:50:00", "b": 608.2}, {"a": "2025-02-02 12:55:00", "b": 611.6666666666666}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    