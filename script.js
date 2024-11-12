
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-11 22:00:00", "b": 695.4}, {"a": "2024-11-11 22:05:00", "b": 691.75}, {"a": "2024-11-11 22:10:00", "b": 694.8}, {"a": "2024-11-11 22:15:00", "b": 693.8}, {"a": "2024-11-11 22:20:00", "b": 678.6}, {"a": "2024-11-11 22:25:00", "b": 678.8}, {"a": "2024-11-11 22:30:00", "b": 665.0}, {"a": "2024-11-11 22:35:00", "b": 657.6}, {"a": "2024-11-11 22:40:00", "b": 650.8}, {"a": "2024-11-11 22:45:00", "b": 655.0}, {"a": "2024-11-11 22:50:00", "b": 644.6}, {"a": "2024-11-11 22:55:00", "b": 636.3333333333334}, {"a": "2024-11-11 23:00:00", "b": 642.2}, {"a": "2024-11-11 23:05:00", "b": 645.6}, {"a": "2024-11-11 23:10:00", "b": 636.6666666666666}, {"a": "2024-11-11 23:15:00", "b": 631.0}, {"a": "2024-11-11 23:20:00", "b": 623.4}, {"a": "2024-11-11 23:25:00", "b": 635.4}, {"a": "2024-11-11 23:30:00", "b": 628.2}, {"a": "2024-11-11 23:35:00", "b": 631.25}, {"a": "2024-11-11 23:40:00", "b": 632.0}, {"a": "2024-11-11 23:45:00", "b": 623.6666666666666}, {"a": "2024-11-11 23:50:00", "b": 617.75}, {"a": "2024-11-11 23:55:00", "b": 619.4}, {"a": "2024-11-12 00:00:00", "b": 612.75}, {"a": "2024-11-12 00:05:00", "b": 606.6}, {"a": "2024-11-12 00:10:00", "b": 612.6666666666666}, {"a": "2024-11-12 00:15:00", "b": 603.0}, {"a": "2024-11-12 00:20:00", "b": 607.4}, {"a": "2024-11-12 00:25:00", "b": 613.5}, {"a": "2024-11-12 00:30:00", "b": 611.25}, {"a": "2024-11-12 00:35:00", "b": 614.5}, {"a": "2024-11-12 00:40:00", "b": 607.75}, {"a": "2024-11-12 00:45:00", "b": 603.0}, {"a": "2024-11-12 00:50:00", "b": 604.5}, {"a": "2024-11-12 00:55:00", "b": 603.4}, {"a": "2024-11-12 01:00:00", "b": 606.25}, {"a": "2024-11-12 01:05:00", "b": 604.8}, {"a": "2024-11-12 01:10:00", "b": 602.0}, {"a": "2024-11-12 01:15:00", "b": 606.2}, {"a": "2024-11-12 01:20:00", "b": 599.4}, {"a": "2024-11-12 01:25:00", "b": 602.8}, {"a": "2024-11-12 01:30:00", "b": 598.4}, {"a": "2024-11-12 01:35:00", "b": 598.0}, {"a": "2024-11-12 01:40:00", "b": 590.8}, {"a": "2024-11-12 01:45:00", "b": 593.0}, {"a": "2024-11-12 01:50:00", "b": 593.5}, {"a": "2024-11-12 01:55:00", "b": 598.0}, {"a": "2024-11-12 02:00:00", "b": 599.5}, {"a": "2024-11-12 02:05:00", "b": 606.6666666666666}, {"a": "2024-11-12 02:10:00", "b": 607.4}, {"a": "2024-11-12 02:15:00", "b": 594.75}, {"a": "2024-11-12 02:20:00", "b": 594.4}, {"a": "2024-11-12 02:25:00", "b": 584.2}, {"a": "2024-11-12 02:30:00", "b": 589.6666666666666}, {"a": "2024-11-12 02:35:00", "b": 594.8}, {"a": "2024-11-12 02:40:00", "b": 575.2}, {"a": "2024-11-12 02:45:00", "b": 574.3333333333334}, {"a": "2024-11-12 02:50:00", "b": 581.4}, {"a": "2024-11-12 02:55:00", "b": 592.8}, {"a": "2024-11-12 03:00:00", "b": 579.6666666666666}, {"a": "2024-11-12 03:05:00", "b": 576.8}, {"a": "2024-11-12 03:10:00", "b": 570.4}, {"a": "2024-11-12 03:15:00", "b": 575.0}, {"a": "2024-11-12 03:20:00", "b": 583.8}, {"a": "2024-11-12 03:25:00", "b": 574.2}, {"a": "2024-11-12 03:30:00", "b": 564.6}, {"a": "2024-11-12 03:35:00", "b": 578.0}, {"a": "2024-11-12 03:40:00", "b": 581.0}, {"a": "2024-11-12 03:45:00", "b": 571.0}, {"a": "2024-11-12 03:50:00", "b": 567.4}, {"a": "2024-11-12 03:55:00", "b": 571.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    