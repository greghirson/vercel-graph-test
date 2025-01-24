
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-23 22:00:00", "b": 759.2}, {"a": "2025-01-23 22:05:00", "b": 766.6}, {"a": "2025-01-23 22:10:00", "b": 762.6}, {"a": "2025-01-23 22:15:00", "b": 749.4}, {"a": "2025-01-23 22:20:00", "b": 742.0}, {"a": "2025-01-23 22:25:00", "b": 743.8}, {"a": "2025-01-23 22:30:00", "b": 738.8}, {"a": "2025-01-23 22:35:00", "b": 718.8}, {"a": "2025-01-23 22:40:00", "b": 722.0}, {"a": "2025-01-23 22:45:00", "b": 724.25}, {"a": "2025-01-23 22:50:00", "b": 683.0}, {"a": "2025-01-23 22:55:00", "b": 641.6}, {"a": "2025-01-23 23:00:00", "b": 639.2}, {"a": "2025-01-23 23:05:00", "b": 631.25}, {"a": "2025-01-23 23:10:00", "b": 624.0}, {"a": "2025-01-23 23:15:00", "b": 624.6}, {"a": "2025-01-23 23:20:00", "b": 619.6}, {"a": "2025-01-23 23:25:00", "b": 611.25}, {"a": "2025-01-23 23:30:00", "b": 606.25}, {"a": "2025-01-23 23:35:00", "b": 599.6}, {"a": "2025-01-23 23:40:00", "b": 594.4}, {"a": "2025-01-23 23:45:00", "b": 588.6}, {"a": "2025-01-23 23:50:00", "b": 579.0}, {"a": "2025-01-23 23:55:00", "b": 570.0}, {"a": "2025-01-24 00:00:00", "b": 575.75}, {"a": "2025-01-24 00:05:00", "b": 576.5}, {"a": "2025-01-24 00:10:00", "b": 584.6}, {"a": "2025-01-24 00:15:00", "b": 636.8}, {"a": "2025-01-24 00:20:00", "b": 669.6}, {"a": "2025-01-24 00:25:00", "b": 653.8}, {"a": "2025-01-24 00:30:00", "b": 637.0}, {"a": "2025-01-24 00:35:00", "b": 555.6}, {"a": "2025-01-24 00:40:00", "b": 537.5}, {"a": "2025-01-24 00:45:00", "b": 529.75}, {"a": "2025-01-24 00:50:00", "b": 529.5}, {"a": "2025-01-24 00:55:00", "b": 515.2}, {"a": "2025-01-24 01:00:00", "b": 507.5}, {"a": "2025-01-24 01:05:00", "b": 511.2}, {"a": "2025-01-24 01:10:00", "b": 507.2}, {"a": "2025-01-24 01:15:00", "b": 509.0}, {"a": "2025-01-24 01:20:00", "b": 495.4}, {"a": "2025-01-24 01:25:00", "b": 492.6}, {"a": "2025-01-24 01:30:00", "b": 485.0}, {"a": "2025-01-24 01:35:00", "b": 493.4}, {"a": "2025-01-24 01:40:00", "b": 505.8}, {"a": "2025-01-24 01:45:00", "b": 490.4}, {"a": "2025-01-24 01:50:00", "b": 473.6}, {"a": "2025-01-24 01:55:00", "b": 483.0}, {"a": "2025-01-24 02:00:00", "b": 483.8}, {"a": "2025-01-24 02:05:00", "b": 471.0}, {"a": "2025-01-24 02:10:00", "b": 473.6}, {"a": "2025-01-24 02:15:00", "b": 477.8}, {"a": "2025-01-24 02:20:00", "b": 478.8}, {"a": "2025-01-24 02:25:00", "b": 473.4}, {"a": "2025-01-24 02:30:00", "b": 485.8}, {"a": "2025-01-24 02:35:00", "b": 540.0}, {"a": "2025-01-24 02:40:00", "b": 559.5}, {"a": "2025-01-24 02:45:00", "b": 573.25}, {"a": "2025-01-24 02:50:00", "b": 547.8}, {"a": "2025-01-24 02:55:00", "b": 513.0}, {"a": "2025-01-24 03:00:00", "b": 490.5}, {"a": "2025-01-24 03:05:00", "b": 488.6666666666667}, {"a": "2025-01-24 03:10:00", "b": 468.4}, {"a": "2025-01-24 03:15:00", "b": 474.0}, {"a": "2025-01-24 03:20:00", "b": 478.0}, {"a": "2025-01-24 03:25:00", "b": 475.0}, {"a": "2025-01-24 03:30:00", "b": 462.75}, {"a": "2025-01-24 03:35:00", "b": 470.5}, {"a": "2025-01-24 03:40:00", "b": 468.5}, {"a": "2025-01-24 03:45:00", "b": 463.0}, {"a": "2025-01-24 03:50:00", "b": 466.2}, {"a": "2025-01-24 03:55:00", "b": 462.3333333333333}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    